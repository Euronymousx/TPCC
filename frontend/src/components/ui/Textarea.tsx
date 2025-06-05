import type { TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'border border-brandBrown/30 rounded-card px-3 py-2 w-full focus:ring-2 focus:ring-accentTeal',
        className
      )}
      {...props}
    />
  )
}
