'use client'

import React, { useState } from 'react'
import { useSDK } from '@thesolidchain/sdk-react'

interface TokenData {
  symbol?: string
  address?: { value: string }
  decimals?: number
  chainInfo?: { chainId: number }
  [key: string]: unknown
}

export function TokenFetcher() {
  const [symbol, setSymbol] = useState('WETH')
  const [tokenData, setTokenData] = useState<TokenData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // useSDK uses a default chainId if not explicitly passed depending on the configuration. Let's pass chainId: 1 for mainnet.
  const sdk = useSDK({ chainId: 1 })

  const fetchToken = async () => {
    if (!symbol) return
    setLoading(true)
    setError(null)
    setTokenData(null)

    try {
      const data = await sdk.getTokenBySymbol({ chainId: 1, symbol: symbol.toUpperCase() })
      setTokenData(data as unknown as TokenData)
    } catch (err) {
      console.error(err)
      setError((err as Error)?.message || 'Failed to fetch token.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-16 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm relative z-10 text-left">
      <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[var(--neon-orange)] animate-pulse"></span>
        SDK Token Fetcher
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="e.g. USDC, WETH, WBTC"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="flex-1 bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-neutral-600"
        />
        <button
          onClick={fetchToken}
          disabled={loading}
          className="px-6 py-3 rounded-xl font-bold text-black bg-[var(--neon-cyan)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
        >
          {loading ? 'Fetching...' : 'Fetch Token'}
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 mb-6 font-mono text-sm break-words">
          Error: {error}
        </div>
      )}

      {tokenData && (
        <div className="p-6 rounded-xl bg-black/60 border border-[var(--neon-orange)]/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,85,0,0.1)] relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[var(--neon-orange)]/10 blur-[50px] -mt-10 -mr-10 transition-all duration-700 group-hover:bg-[var(--neon-orange)]/20"></div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xl border border-neutral-700 text-[var(--neon-orange)]">
              {tokenData.symbol?.slice(0, 1) || '?'}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide">{tokenData.symbol}</h3>
              <p className="text-neutral-400 font-mono text-xs mt-1 truncate max-w-[200px] sm:max-w-xs">
                {tokenData.address?.value}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-900/80 p-3 rounded-lg border border-neutral-800">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-1">
                Decimals
              </span>
              <span className="font-mono text-white text-lg">{tokenData.decimals}</span>
            </div>
            {tokenData.chainInfo && (
              <div className="bg-neutral-900/80 p-3 rounded-lg border border-neutral-800">
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-1">
                  Chain ID
                </span>
                <span className="font-mono text-white text-lg">{tokenData.chainInfo.chainId}</span>
              </div>
            )}

            <div className="bg-neutral-900/80 p-3 rounded-lg border border-neutral-800 col-span-2 overflow-x-auto">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-2">
                Raw JSON
              </span>
              <pre className="text-xs text-neutral-400 font-mono text-left leading-relaxed">
                {JSON.stringify(tokenData, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
