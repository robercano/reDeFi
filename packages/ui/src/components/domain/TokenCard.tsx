import React from 'react'
import { Card } from '../ui/Card'
import { TokenIcon } from './TokenIcon'
import { DataBlock } from '../ui/DataBlock'

export interface TokenMetadata {
  symbol?: string
  address?: { value: string }
  decimals?: number
  chainInfo?: { chainId: number }
  [key: string]: unknown // To map any remaining raw object
}

interface TokenCardProps {
  token: TokenMetadata
}

export function TokenCard({ token }: TokenCardProps) {
  return (
    <Card>
      <div className="flex items-center gap-4 mb-4">
        <TokenIcon symbol={token.symbol || '?'} />
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide">
            {token.symbol || 'Unknown'}
          </h3>
          <p className="text-neutral-400 font-mono text-xs mt-1 truncate max-w-[200px] sm:max-w-xs cursor-text">
            {token.address?.value || 'Unknown Address'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <DataBlock label="Decimals" value={token.decimals ?? 'N/A'} />

        {token.chainInfo && <DataBlock label="Chain ID" value={token.chainInfo.chainId} />}

        <DataBlock
          label="Raw JSON"
          className="col-span-2 overflow-x-auto"
          value={
            <pre className="text-xs text-neutral-400 font-mono text-left leading-relaxed">
              {JSON.stringify(token, null, 2)}
            </pre>
          }
        />
      </div>
    </Card>
  )
}
