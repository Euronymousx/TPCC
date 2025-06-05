import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface Props {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: Props) {
  return (
    <div className={cn('bg-offWhite shadow-xl rounded-card p-6', className)}>
      {children}
    </div>
  )
}
