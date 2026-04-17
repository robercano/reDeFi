import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none focus:outline-none',
  {
    variants: {
      intent: {
        primary:
          'text-black bg-[var(--neon-cyan)] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] active:scale-95',
        secondary:
          'border border-[var(--neon-cyan)]/50 bg-black/40 text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 active:scale-95 backdrop-blur-md',
        danger: 'bg-red-500 text-white hover:bg-red-600',
      },
      size: {
        default: 'px-6 py-3',
        sm: 'px-4 py-2 text-sm',
        lg: 'px-8 py-4 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ intent, size, fullWidth, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
