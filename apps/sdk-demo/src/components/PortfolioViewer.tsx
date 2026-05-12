'use client'

import React, { useState } from 'react'
import { useAppSDK } from '../app/AppSDKContext'
import { useAccount } from 'wagmi'
import { IUserPortfolio, formatTokenAmountHumanReadable } from '@thesolidchain/sdk-common'
import { TokenBalanceUI } from './TokenBalanceUI'

export function PortfolioViewer() {
  const [portfolio, setPortfolio] = useState<IUserPortfolio | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { isConnected } = useAccount()
  const sdk = useAppSDK()

  const fetchPortfolio = async () => {
    if (!isConnected) return
    setLoading(true)
    setError(null)
    setPortfolio(null)

    try {
      const user = sdk.getCurrentUser()
      if (!user.wallet.address) {
        throw new Error('Wallet address is not defined.')
      }

      const userPortfolio = await sdk.getUserPortfolio({ user })
      console.log('[PortfolioViewer] Fetched user portfolio:', userPortfolio)
      setPortfolio(userPortfolio)
    } catch (err) {
      console.error(err)
      setError((err as Error)?.message || 'Failed to fetch user portfolio.')
    } finally {
      setLoading(false)
    }
  }

  // Helper to safely display fiat amounts.
  const formatFiat = (amountStr?: string) => {
    if (!amountStr) return '$0.00'
    const num = Number(amountStr)
    if (isNaN(num)) return `$0.00`
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm relative z-10 text-left">
      <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[var(--neon-cyan)] animate-pulse"></span>
        User Portfolio Viewer
      </h2>

      {!isConnected ? (
        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 font-medium">
          Please connect your wallet using the button in the top right to view your portfolio.
        </div>
      ) : (
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={fetchPortfolio}
            disabled={loading}
            className="px-6 py-3 flex-1 sm:flex-none rounded-xl font-bold text-black bg-[var(--neon-cyan)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
          >
            {loading ? 'Fetching User Portfolio...' : 'Fetch Connected Portfolio'}
          </button>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 mb-6 font-mono text-sm break-words">
          Error: {error}
        </div>
      )}

      {portfolio && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          {/* Total Value Header Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/40 border border-neutral-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--neon-cyan)]/5 blur-[80px] -mt-10 -mr-10 transition-all duration-700 group-hover:bg-[var(--neon-cyan)]/10"></div>
            <h3 className="text-neutral-400 font-medium uppercase tracking-widest text-sm mb-2">
              Total Portfolio Value
            </h3>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-lg">
              {formatFiat(portfolio.totalFiatValue?.amount)}
            </div>
            <div className="text-sm font-mono text-neutral-500 mt-4 break-words">
              User: <span className="text-neutral-300">{portfolio.user.wallet.address?.value}</span>
            </div>
          </div>

          {/* Holdings Breakdown */}
          {portfolio.walletHoldings && portfolio.walletHoldings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolio.walletHoldings.map((holding, idx) => {
                const supplyStr = formatTokenAmountHumanReadable(holding.amount)
                return (
                  <TokenBalanceUI
                    key={idx}
                    token={holding.amount.token}
                    balance={supplyStr}
                    fiatValue={formatFiat(holding.fiatValue?.amount)}
                  />
                )
              })}
            </div>
          ) : (
            <div className="text-center p-8 bg-neutral-900/50 rounded-xl border border-neutral-800 text-neutral-400">
              No recognized tokens with a balance found in this wallet.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
