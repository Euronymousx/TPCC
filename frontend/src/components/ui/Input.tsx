import type { InputHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'border border-brandBrown/30 rounded-card px-3 py-2 w-full focus:ring-2 focus:ring-accentTeal',
        className
      )}
      {...props}
    />
  )
}
