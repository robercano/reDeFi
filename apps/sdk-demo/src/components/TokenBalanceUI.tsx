import React from 'react'
import Image from 'next/image'
import { IToken } from '@thesolidchain/sdk-common'

interface TokenBalanceUIProps {
  token: IToken
  balance?: string
  fiatValue?: string
}

export function TokenBalanceUI({ token, balance, fiatValue }: TokenBalanceUIProps) {
  return (
    <div className="bg-neutral-900/80 p-5 rounded-xl border border-neutral-800 transition-colors hover:border-[var(--neon-cyan)]/50 relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-xl text-white">{token.symbol}</h4>
          <p className="text-xs text-neutral-500 font-mono mt-1 break-all pr-4">
             {token.address?.value}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full flex-shrink-0 bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-[var(--neon-cyan)] overflow-hidden">
          {token.logoURI ? (
            <Image 
              src={token.logoURI} 
              alt={token.symbol}
              width={40}
              height={40}
              className="w-full h-full object-cover" 
            />
          ) : (
            token.symbol?.slice(0, 3)
          )}
        </div>
      </div>
      
      {(balance !== undefined || fiatValue !== undefined) && (
        <div className="space-y-1">
          {balance !== undefined && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-500">Balance:</span>
              <span className="text-white font-mono">{balance}</span>
            </div>
          )}
          {fiatValue !== undefined && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-500">Fiat Value:</span>
              <span className="text-[var(--neon-cyan)] font-mono font-bold">
                 {fiatValue}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
