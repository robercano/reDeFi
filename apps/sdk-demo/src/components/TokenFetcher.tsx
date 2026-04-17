'use client'

import React, { useState } from 'react'
import { useAppSDK } from '../app/AppSDKContext'
import { useAccount } from 'wagmi'
import { IToken, ITokenAmount, formatTokenAmountHumanReadable } from '@thesolidchain/sdk-common'

// Loose interface to accommodate all dynamic data the SDK might return
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
  
  // Dynamically pull the chainId from the connected wallet connection
  const { chainId } = useAccount()

  // Consume the pre-initialized SDK from the app-level context
  const sdk = useAppSDK()

  const fetchToken = async () => {
    if (!symbol) return
    setLoading(true)
    setError(null)
    setTokenData(null)

    try {
      // Pass the chainId dynamically to the fetcher request
      const data = await sdk.getTokenBySymbol({ chainId: chainId ?? 1, symbol: symbol.toUpperCase() })
      
      let supplyAmount = 'Not Supported'
      const supply = await sdk.getTokenTotalSupply({ token: data as IToken })
      if (supply) {
        try {
          supplyAmount = formatTokenAmountHumanReadable(supply as ITokenAmount)
        } catch {
          supplyAmount = supply?.amount || String(supply)
        }
      }

      // Merge the retrieved dynamic on-chain state with the static invariants so the UI grid natively renders it
      setTokenData({ ...data, totalSupply: supplyAmount } as unknown as TokenData)
    } catch (err) {
      console.error(err)
      setError((err as Error)?.message || 'Failed to fetch token metadata.')
    } finally {
      setLoading(false)
    }
  }

  // Helper to neatly format any deeply nested SDK responses into readable strings
  const formatValue = (val: unknown): string => {
    if (typeof val === 'object' && val !== null) {
      const obj = val as Record<string, unknown>
      if ('value' in obj) return String(obj.value)
      if ('chainId' in obj && 'name' in obj) return `${obj.name} (ID: ${obj.chainId})`
      if ('chainId' in obj) return String(obj.chainId)
      return JSON.stringify(val)
    }
    return String(val)
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm relative z-10 text-left">
      <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[var(--neon-orange)] animate-pulse"></span>
        Query Token Interface
      </h2>

      {/* Interactive Inputs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="e.g. USDC, WETH, WBTC"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="flex-1 bg-black/50 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-neutral-600"
          onKeyDown={(e) => e.key === 'Enter' && fetchToken()}
        />
        <button
          onClick={fetchToken}
          disabled={loading}
          className="px-6 py-3 rounded-xl font-bold text-black bg-[var(--neon-cyan)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
        >
          {loading ? 'Fetching...' : 'Fetch Token'}
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 mb-6 font-mono text-sm break-words">
          Error: {error}
        </div>
      )}

      {/* Token Data Display */}
      {tokenData && (
        <div className="p-6 rounded-xl bg-black/60 border border-[var(--neon-orange)]/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,85,0,0.1)] relative overflow-hidden group transition-all duration-500">
          <div className="absolute right-0 top-0 w-40 h-40 bg-[var(--neon-orange)]/10 blur-[60px] -mt-10 -mr-10 transition-all duration-700 group-hover:bg-[var(--neon-orange)]/20"></div>

          {/* Primary Header Card (Symbol and Address) */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-2xl border border-neutral-700 text-[var(--neon-orange)] shadow-inner">
              {tokenData.symbol?.slice(0, 1) || '?'}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white tracking-wide">{tokenData.symbol}</h3>
              <div className="text-neutral-400 font-mono text-sm mt-1 truncate">
                {tokenData.address?.value || 'N/A'}
              </div>
            </div>
          </div>

          {/* Dynamic Render of All Available SDK Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(tokenData).map(([key, value]) => {
              // Skip the fields already heavily featured in the header
              if (key === 'symbol' || key === 'address') return null

              // Prettify camel case keys (e.g., chainInfo -> Chain Info)
              const formattedKey = key.replace(/([A-Z])/g, ' $1').trim()

              return (
                <div key={key} className="bg-neutral-900/80 p-4 rounded-lg border border-neutral-800 flex flex-col justify-center transition-colors hover:border-neutral-600">
                  <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-2">
                    {formattedKey}
                  </span>
                  <span className="font-mono text-white text-sm break-words whitespace-pre-wrap">
                    {formatValue(value)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
