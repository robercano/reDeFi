'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useAppSDK } from '../app/AppSDKContext'
import { useAccount, useSendTransaction, usePublicClient } from 'wagmi'
import { formatTokenAmountHumanReadable, IToken, TokenAmount, ISimulation, Order, SimulationSteps, ExecutionType, SwapStep, Percentage, User, ChainInfo, Wallet, Address } from '@thesolidchain/sdk-common'

export function SwapViewer() {
  const [fromSymbol, setFromSymbol] = useState('WETH')
  const [toSymbol, setToSymbol] = useState('USDC')
  const [fromAmount, setFromAmount] = useState('1')
  const [slippage, setSlippage] = useState('1')
  const [simulation, setSimulation] = useState<ISimulation | null>(null)
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(false)
  const [executingIndex, setExecutingIndex] = useState(-1)
  const [error, setError] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [isPolling, setIsPolling] = useState(false)
  const [debugLog, setDebugLog] = useState<string[]>([])

  const logDebug = (msg: string) => {
    console.log('[SwapViewer Debug]', msg)
    setDebugLog(prev => [...prev, `${new Date().toLocaleTimeString()} - ${msg}`])
  }

  const { chainId } = useAccount()
  const sdk = useAppSDK()

  const fetchQuote = useCallback(
    async (isSilent = false) => {
      if (!fromSymbol || !toSymbol || !fromAmount) return
      if (!isSilent) {
        setLoading(true)
        setError(null)
        setSuccessMsg(null)
        setSimulation(null)
        setOrder(null)
      }

      try {
        const activeChainId = chainId ?? 1

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

        // 2. Fetch Swap Simulation
        const fromAmountToken = TokenAmount.createFrom({
          amount: fromAmount,
          token: fromToken as IToken,
        })
        let user;
        try {
          user = sdk.getCurrentUser()
        } catch (e) {
          if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
            console.warn('Wallet not connected. Using mock user for simulation.')
            user = User.createFrom({
              chainInfo: ChainInfo.createFrom({ chainId: 1, name: 'Ethereum' }),
              wallet: Wallet.createFrom({ address: Address.createFromEthereum({ value: '0x1234567890123456789012345678901234567890' }) })
            })
          } else {
            throw e
          }
        }

        const simulationData = await sdk.simulator.swap.simulateSwap({
          user: user,
          sellToken: fromToken as IToken,
          buyToken: toToken as IToken,
          sellAmount: fromAmountToken,
          slippage: { value: slippage } as unknown as Percentage,
        })

        setSimulation(simulationData)
        if (isSilent) setError(null)

        // 3. Build the Execution Order
        const orderData = await sdk.buildOrder({
           user: user,
           simulation: simulationData,
           executionType: ExecutionType.Multicall,
        })
        setOrder(orderData || null)
      } catch (err) {
        console.error(err)
        setError((err as Error)?.message || 'Failed to fetch swap quote.')
        if (isSilent) setIsPolling(false)
      } finally {
        if (!isSilent) setLoading(false)
      }
    },
    [fromSymbol, toSymbol, fromAmount, slippage, chainId, sdk],
  )

  const publicClient = usePublicClient()
  const { sendTransactionAsync } = useSendTransaction()
  const handleExecute = async () => {
    if (!order || order.transactions.length === 0) return
    try {
      logDebug('Starting execution...')
      setLoading(true)
      setError(null)
      setSuccessMsg(null)
      setDebugLog([])
      
      for (let i = 0; i < order.transactions.length; i++) {
        setExecutingIndex(i)
        const txInfo = order.transactions[i]
        
        const hash = await sendTransactionAsync({
          to: txInfo.transaction.target.value as `0x${string}`,
          data: txInfo.transaction.calldata as `0x${string}`,
          value: BigInt(txInfo.transaction.value || 0),
        })
        
        logDebug(`Transaction ${i + 1}/${order.transactions.length} submitted. Hash: ${hash}`)
        
        if (publicClient) {
          const rpcUrl = publicClient.chain?.rpcUrls?.default?.http?.[0] || 'Unknown RPC'
          logDebug(`PublicClient RPC URL: ${rpcUrl}`)
          logDebug(`Polling manually for receipt of ${hash}...`)
          
          let receipt = null
          let attempts = 0
          while (!receipt && attempts < 30) {
            try {
              receipt = await publicClient.getTransactionReceipt({ hash })
            } catch (e) {
              // Viem throws if not found yet
              attempts++
              await new Promise(r => setTimeout(r, 1000))
            }
          }

          if (!receipt) {
            throw new Error(`Transaction receipt not found after 30 seconds! Hash: ${hash}`)
          }

          logDebug(`Receipt received! Status: ${receipt.status}`)
          if (receipt.status === 'reverted') {
            logDebug('Transaction reverted!')
            throw new Error(`Transaction ${i + 1} reverted on chain! Hash: ${hash}`)
          }
        } else {
          logDebug('No publicClient available!')
        }
      }
      
      logDebug('All transactions finished! Setting success message.')
      setSuccessMsg(`All ${order.transactions.length} transactions executed successfully!`)
      logDebug('Calling fetchQuote(true) to refresh balances...')
      fetchQuote(true)
      logDebug('Execution flow complete.')
    } catch (err) {
      logDebug(`Error caught: ${(err as Error)?.message}`)
      console.error(err)
      const message = (err as Error)?.message || ''
      
      if (message.includes('User rejected the request') || message.includes('User denied transaction signature')) {
        setError('Transaction was rejected by the user. Please try again when you are ready.')
      } else {
        setError(message || 'Failed to execute swap.')
      }
    } finally {
      setLoading(false)
      setExecutingIndex(-1)
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
      <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[var(--neon-orange)] animate-pulse"></span>
        Swap Quote Simulator
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
              className="w-full bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-orange)] transition-colors placeholder:text-neutral-600 uppercase"
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
              className="w-full bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-orange)] transition-colors placeholder:text-neutral-600 uppercase"
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
            className="flex-[2] px-6 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-cyan)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,85,0,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
          >
            {loading ? 'Simulating Swap Route...' : 'Get Swap Quote'}
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

      {simulation && (
        <div className="p-6 mt-6 rounded-xl bg-black/60 border border-[var(--neon-cyan)]/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)] relative overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="absolute right-0 top-0 w-40 h-40 bg-[var(--neon-cyan)]/10 blur-[60px] -mt-10 -mr-10"></div>

          <h3 className="text-neutral-400 font-medium uppercase tracking-widest text-sm mb-4">
            Optimal Route Found
          </h3>

          <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-800">
            <div className="flex-1">
              <div className="text-sm text-neutral-500 mb-1">Pay</div>
              <div className="text-2xl font-bold text-white break-words">
                {(() => {
                  const swapStep = simulation.steps.find((s) => s.type === SimulationSteps.Swap) as SwapStep | undefined
                  return swapStep ? formatTokenAmountHumanReadable(swapStep.inputs.inputAmount) + ' ' + swapStep.inputs.inputAmount.token.symbol : ''
                })()}
              </div>
            </div>

            <div className="px-4 text-neutral-500">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            <div className="flex-1 text-right">
              <div className="text-sm text-neutral-500 mb-1">Receive (Estimated)</div>
              <div className="text-2xl font-bold text-[var(--neon-cyan)] break-words">
                {(() => {
                  const swapStep = simulation.steps.find((s) => s.type === SimulationSteps.Swap) as SwapStep | undefined
                  return swapStep ? formatTokenAmountHumanReadable(swapStep.outputs.received) + ' ' + swapStep.outputs.received.token.symbol : ''
                })()}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">Provider</div>
              <div className="font-mono text-white text-sm bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
                {(() => {
                  const swapStep = simulation.steps.find((s) => s.type === SimulationSteps.Swap) as SwapStep | undefined
                  return swapStep ? swapStep.inputs.provider : 'Unknown'
                })()}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">
                Steps Required
              </div>
              <div className="font-mono text-[var(--neon-orange)] text-sm bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
                {simulation.steps.length} ({simulation.steps.map(s => s.type.split('_').pop()).join(' + ')})
              </div>
            </div>
          </div>
          
          <button
            onClick={handleExecute}
            disabled={loading || !order || order.transactions.length === 0}
            className="w-full px-6 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-orange)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
          >
            {loading && executingIndex >= 0 && order
              ? `Executing ${executingIndex + 1}/${order.transactions.length}: ${order.transactions[executingIndex].description}`
              : loading
              ? 'Executing...'
              : order && order.transactions.length > 1
              ? `Execute Swap (${order.transactions.length} steps)`
              : 'Execute Swap'}
          </button>
        </div>
      )}
    </div>
  )
}
