import React from 'react'
import { cn } from '../../lib/utils'

interface DataBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: React.ReactNode
}

export function DataBlock({ label, value, className, ...props }: DataBlockProps) {
  return (
    <div
      className={cn('bg-neutral-900/80 p-3 rounded-lg border border-neutral-800', className)}
      {...props}
    >
      <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-1">
        {label}
      </span>
      <div className="font-mono text-white text-lg break-all">{value}</div>
    </div>
  )
}
