import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ className, variant = 'primary', ...props }: Props) {
  const base = 'transition-transform shadow-xl rounded-card px-5 py-3 font-semibold focus:outline-none'
  const variants = {
    primary: 'bg-brandBrown text-offWhite hover:-translate-y-1',
    secondary: 'bg-accentTeal text-nearBlack hover:-translate-y-1',
  }
  return <button className={cn(base, variants[variant], className)} {...props} />
}
