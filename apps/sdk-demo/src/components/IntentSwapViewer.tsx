'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useAppSDK } from '../app/AppSDKContext'
import { useAccount, useSendTransaction, usePublicClient } from 'wagmi'
import { formatTokenAmountHumanReadable, IToken, TokenAmount, IntentQuoteData, Address, ChainId, ActivityType, ActivityStatus } from '@thesolidchain/sdk-common'



export function IntentSwapViewer() {
  const [fromSymbol, setFromSymbol] = useState('WETH')
  const [toSymbol, setToSymbol] = useState('USDC')
  const [fromAmount, setFromAmount] = useState('1')
  const [slippage, setSlippage] = useState('1')
  const [intentQuote, setIntentQuote] = useState<IntentQuoteData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [isPolling, setIsPolling] = useState(false)
  const [debugLog, setDebugLog] = useState<string[]>([])


  const logDebug = (msg: string) => {
    console.log('[IntentSwapViewer Debug]', msg)
    setDebugLog(prev => [...prev, `${new Date().toLocaleTimeString()} - ${msg}`])
  }

  const { chainId, address } = useAccount()
  const sdk = useAppSDK()

  const fetchQuote = useCallback(
    async (isSilent = false) => {
      if (!fromSymbol || !toSymbol || !fromAmount) return
      if (!isSilent) {
        setLoading(true)
        setError(null)
        setSuccessMsg(null)
        setIntentQuote(null)
      }

      try {
        const activeChainId = chainId ?? 11155111

        // 1. Resolve Tokens
        const fromToken = await sdk.getTokenBySymbol({
          chainId: activeChainId,
          symbol: fromSymbol.toUpperCase(),
        })
        const toToken = await sdk.getTokenBySymbol({
          chainId: activeChainId,
          symbol: toSymbol.toUpperCase(),
        })

        if (!fromToken)
          throw new Error(`Could not resolve token ${fromSymbol} on chain ${activeChainId}`)
        if (!toToken)
          throw new Error(`Could not resolve token ${toSymbol} on chain ${activeChainId}`)

        const fromAmountToken = TokenAmount.createFrom({
          amount: fromAmount,
          token: fromToken as IToken,
        })
        
        const userAddress = address || '0x1234567890123456789012345678901234567890'

        // Fetch Quote using intentSwaps
        const quoteData = await sdk.intentSwaps.getSellOrderQuote({
          fromAmount: fromAmountToken,
          toToken: toToken as IToken,
          sender: Address.createFromEthereum({ value: userAddress })
        })

        setIntentQuote(quoteData)
        if (isSilent) setError(null)

      } catch (err) {
        console.error(err)
        setError((err as Error)?.message || 'Failed to fetch intent quote.')
        if (isSilent) setIsPolling(false)
      } finally {
        if (!isSilent) setLoading(false)
      }
    },
    [fromSymbol, toSymbol, fromAmount, chainId, sdk, address],
  )

  const publicClient = usePublicClient()
  const { sendTransactionAsync } = useSendTransaction()
  
  const handleExecute = async () => {
    if (!intentQuote) return
    try {
      logDebug('Starting intent execution...')
      setLoading(true)
      setError(null)
      setSuccessMsg(null)
      setDebugLog([])
      
      const activeChainId = chainId ?? 11155111
      const userAddress = address || '0x1234567890123456789012345678901234567890'

      logDebug('Requesting signature / sending order...')
      
      const result = await sdk.intentSwaps.sendOrder({
         fromAmount: intentQuote.fromAmount,
         sender: Address.createFromEthereum({ value: userAddress }),
         chainId: activeChainId as ChainId,
         order: intentQuote.order,
      })

      if (result.status === 'allowance_needed' || result.status === 'wrap_to_native') {
         logDebug(`Prerequisite required: ${result.status}`)
         const tx = result.transactionInfo.transaction
         
         const hash = await sendTransactionAsync({
            to: tx.target.value as `0x${string}`,
            data: tx.calldata as `0x${string}`,
            value: BigInt(tx.value || 0),
         })
         logDebug(`Submitted prerequisite tx: ${hash}. Waiting for receipt...`)
         
         // Log the transaction
         await sdk.activity.logActivity({
           id: hash,
           type: ActivityType.TRANSACTION,
           status: ActivityStatus.PENDING,
           chainId: activeChainId,
           timestamp: Date.now(),
           walletAddress: userAddress,
           metadata: {
             title: result.status === 'allowance_needed' ? `Approve ${intentQuote.fromAmount.token.symbol}` : `Wrap Native Token`,
             explorerLink: `https://sepolia.etherscan.io/tx/${hash}`
           }
         })

         if (publicClient) {
           await publicClient.waitForTransactionReceipt({ hash })
           logDebug('Receipt confirmed! Re-attempting sendOrder...')
           
           // Update transaction status
           await sdk.activity.logActivity({
             id: hash,
             type: ActivityType.TRANSACTION,
             status: ActivityStatus.SUCCESS,
             chainId: activeChainId,
             timestamp: Date.now(),
             walletAddress: userAddress,
             metadata: {
               title: result.status === 'allowance_needed' ? `Approve ${intentQuote.fromAmount.token.symbol}` : `Wrap Native Token`,
               explorerLink: `https://sepolia.etherscan.io/tx/${hash}`
             }
           })

           // Re-trigger handleExecute now that prerequisite is met
           await handleExecute()
           return
         }
      }

      if (result.status === 'order_sent') {
         logDebug(`Order sent successfully! Order ID: ${result.orderId}`)
         setSuccessMsg(`Intent successfully sent to CowSwap solvers! Order ID: ${result.orderId}`)
         
         // Log to global activity tracker
         await sdk.activity.logActivity({
           id: result.orderId,
           type: ActivityType.INTENT,
           status: ActivityStatus.PENDING,
           chainId: activeChainId,
           timestamp: Date.now(),
           walletAddress: userAddress,
           metadata: {
             title: `Swap ${formatTokenAmountHumanReadable(intentQuote.fromAmount)} ${intentQuote.fromAmount.token.symbol} for ${intentQuote.toAmount.token.symbol}`,
           }
         })

         fetchQuote(true)
      }
      
    } catch (err) {
      logDebug(`Error caught: ${(err as Error)?.message}`)
      console.error(err)
      const message = (err as Error)?.message || ''
      
      if (message.includes('User rejected the request') || message.includes('User denied transaction signature')) {
        setError('Signature was rejected by the user.')
      } else {
        setError(message || 'Failed to execute intent swap.')
      }
    } finally {
      setLoading(false)
    }
  }

  // Polling Effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPolling && fromSymbol && toSymbol && fromAmount) {
      interval = setInterval(() => {
        fetchQuote(true)
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPolling, fromSymbol, toSymbol, fromAmount, fetchQuote])



  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm relative z-10 text-left">
      <h2 className="text-xl font-bold mb-6 text-[var(--neon-orange)] flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[var(--neon-cyan)] animate-pulse"></span>
        Intent Swap Simulator
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              From Token
            </label>
            <input
              type="text"
              value={fromSymbol}
              onChange={(e) => setFromSymbol(e.target.value)}
              className="w-full bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-neutral-600 uppercase"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              To Token
            </label>
            <input
              type="text"
              value={toSymbol}
              onChange={(e) => setToSymbol(e.target.value)}
              className="w-full bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-neutral-600 uppercase"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-[2]">
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Amount to Swap
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="w-full bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-neutral-600"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Slippage (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={slippage}
              onChange={(e) => setSlippage(e.target.value)}
              className="w-full bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-neutral-600"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => fetchQuote(false)}
            disabled={loading}
            className="flex-[2] px-6 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-orange)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
          >
            {loading ? 'Fetching Intent Quote...' : 'Get Intent Quote'}
          </button>

          <button
            onClick={() => setIsPolling(!isPolling)}
            className={`flex-1 px-4 py-4 rounded-xl font-bold border transition-all duration-300 flex items-center justify-center gap-2 ${
              isPolling
                ? 'bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500/20'
                : 'bg-[var(--neon-cyan)]/10 border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/20 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
            }`}
          >
            {isPolling && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
            {isPolling ? 'Stop Auto-Refresh' : 'Auto-Refresh (5s)'}
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 mb-6 font-mono text-sm break-words">
          Error: {error}
        </div>
      )}

      {successMsg && (
        <div className="p-4 rounded-xl bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/30 text-[var(--neon-cyan)] mb-6 font-mono text-sm break-words shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          🎉 {successMsg}
        </div>
      )}

      {debugLog.length > 0 && (
        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 mb-6 font-mono text-xs break-words max-h-40 overflow-y-auto">
          <div className="text-[var(--neon-orange)] mb-2 font-bold uppercase">Execution Log (Debug)</div>
          {debugLog.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      )}

      {intentQuote && (
        <div className="p-6 mt-6 rounded-xl bg-black/60 border border-[var(--neon-cyan)]/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)] relative overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="absolute right-0 top-0 w-40 h-40 bg-[var(--neon-cyan)]/10 blur-[60px] -mt-10 -mr-10"></div>

          <h3 className="text-neutral-400 font-medium uppercase tracking-widest text-sm mb-4">
            CowSwap Intent Route
          </h3>

          <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-800">
            <div className="flex-1">
              <div className="text-sm text-neutral-500 mb-1">Pay</div>
              <div className="text-2xl font-bold text-white break-words">
                {formatTokenAmountHumanReadable(intentQuote.fromAmount)} {intentQuote.fromAmount.token.symbol}
              </div>
            </div>

            <div className="px-4 text-[var(--neon-orange)]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            <div className="flex-1 text-right">
              <div className="text-sm text-neutral-500 mb-1">Receive (Estimated)</div>
              <div className="text-2xl font-bold text-[var(--neon-cyan)] break-words">
                {formatTokenAmountHumanReadable(intentQuote.toAmount)} {intentQuote.toAmount.token.symbol}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">Provider</div>
              <div className="font-mono text-white text-sm bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
                CowSwap (Off-chain)
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">
                Valid To
              </div>
              <div className="font-mono text-[var(--neon-orange)] text-sm bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
                {new Date(intentQuote.validTo * 1000).toLocaleTimeString()}
              </div>
            </div>
          </div>
          
          <button
            onClick={handleExecute}
            disabled={loading || !intentQuote}
            className="w-full px-6 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-orange)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
          >
            {loading ? 'Signing/Sending...' : 'Sign & Submit Intent'}
          </button>
        </div>
      )}

    </div>
  )
}
