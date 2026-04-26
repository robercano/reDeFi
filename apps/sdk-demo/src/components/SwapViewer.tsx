'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useAppSDK } from '../app/AppSDKContext'
import { useAccount } from 'wagmi'
import { formatTokenAmountHumanReadable, IToken, QuoteData } from '@thesolidchain/sdk-common'

export function SwapViewer() {
  const [fromSymbol, setFromSymbol] = useState('WETH')
  const [toSymbol, setToSymbol] = useState('USDC')
  const [fromAmount, setFromAmount] = useState('1')
  const [slippage, setSlippage] = useState('1')
  const [quote, setQuote] = useState<QuoteData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPolling, setIsPolling] = useState(false)

  const { chainId } = useAccount()
  const sdk = useAppSDK()

  const fetchQuote = useCallback(async (isSilent = false) => {
    if (!fromSymbol || !toSymbol || !fromAmount) return
    if (!isSilent) {
      setLoading(true)
      setError(null)
      setQuote(null)
    }

    try {
      const activeChainId = chainId ?? 1

      // 1. Resolve Tokens
      const fromToken = await sdk.getTokenBySymbol({ chainId: activeChainId, symbol: fromSymbol.toUpperCase() })
      const toToken = await sdk.getTokenBySymbol({ chainId: activeChainId, symbol: toSymbol.toUpperCase() })

      if (!fromToken) throw new Error(`Could not resolve token ${fromSymbol} on chain ${activeChainId}`)
      if (!toToken) throw new Error(`Could not resolve token ${toSymbol} on chain ${activeChainId}`)

      // 2. Fetch Swap Quote
      const quoteData = await sdk.getSwapQuote({
        fromAmount,
        fromToken: fromToken as IToken,
        toToken: toToken as IToken,
        slippage: Number(slippage)
      })

      setQuote(quoteData)
      if (isSilent) setError(null)
    } catch (err) {
      console.error(err)
      setError((err as Error)?.message || 'Failed to fetch swap quote.')
      if (isSilent) setIsPolling(false)
    } finally {
      if (!isSilent) setLoading(false)
    }
  }, [fromSymbol, toSymbol, fromAmount, slippage, chainId, sdk])

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
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">From Token</label>
            <input
              type="text"
              value={fromSymbol}
              onChange={(e) => setFromSymbol(e.target.value)}
              className="w-full bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-orange)] transition-colors placeholder:text-neutral-600 uppercase"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">To Token</label>
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
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Amount to Swap</label>
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
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Slippage (%)</label>
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

      {quote && (
        <div className="p-6 mt-6 rounded-xl bg-black/60 border border-[var(--neon-cyan)]/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)] relative overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="absolute right-0 top-0 w-40 h-40 bg-[var(--neon-cyan)]/10 blur-[60px] -mt-10 -mr-10"></div>
          
          <h3 className="text-neutral-400 font-medium uppercase tracking-widest text-sm mb-4">
            Optimal Route Found
          </h3>
          
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-800">
            <div className="flex-1">
              <div className="text-sm text-neutral-500 mb-1">Pay</div>
              <div className="text-2xl font-bold text-white break-words">
                {formatTokenAmountHumanReadable(quote.fromTokenAmount)} {quote.fromTokenAmount.token.symbol}
              </div>
            </div>
            
            <div className="px-4 text-neutral-500">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            <div className="flex-1 text-right">
              <div className="text-sm text-neutral-500 mb-1">Receive (Estimated)</div>
              <div className="text-2xl font-bold text-[var(--neon-cyan)] break-words">
                {formatTokenAmountHumanReadable(quote.toTokenAmount)} {quote.toTokenAmount.token.symbol}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">Provider</div>
              <div className="font-mono text-white text-sm bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
                {quote.provider}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">Estimated Gas</div>
              <div className="font-mono text-white text-sm bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
                {quote.estimatedGas}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
