'use client'

import React, { useState } from 'react'
import { useSDK } from '@thesolidchain/sdk-react'
import { Input, Button, TokenCard, TokenMetadata } from '@thesolidchain/redefi-ui'

export function TokenSearch() {
  const [symbol, setSymbol] = useState('WETH')
  const [tokenData, setTokenData] = useState<TokenMetadata | null>(null)
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
      setTokenData(data as unknown as TokenMetadata)
    } catch (err) {
      console.error(err)
      setError((err as Error)?.message || 'Failed to fetch token.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm relative z-10 text-left">
      <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[var(--neon-orange)] animate-pulse"></span>
        Token Query Interface
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="e.g. USDC, WETH, WBTC"
            value={symbol}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSymbol(e.target.value)}
          />
        </div>
        <Button onClick={fetchToken} disabled={loading}>
          {loading ? 'Fetching...' : 'Fetch Token'}
        </Button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 mb-6 font-mono text-sm break-words">
          Error: {error}
        </div>
      )}

      {tokenData && <TokenCard token={tokenData} />}
    </div>
  )
}
