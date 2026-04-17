import React from 'react'
import { cn } from '../../lib/utils'

interface TokenIconProps {
  symbol: string
  className?: string
}

export function TokenIcon({ symbol, className }: TokenIconProps) {
  const initial = symbol?.slice(0, 1)?.toUpperCase() || '?'

  return (
    <div
      className={cn(
        'flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xl border border-neutral-700 text-[var(--neon-orange)]',
        className,
      )}
    >
      {initial}
    </div>
  )
}
