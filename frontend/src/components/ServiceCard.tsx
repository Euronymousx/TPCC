import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'

interface Props {
  icon: ReactNode
  title: string
  blurb: string
}

export function ServiceCard({ icon, title, blurb }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card className="text-center space-y-3">
        <div className="text-4xl">{icon}</div>
        <h3 className="font-display text-xl text-brandBrown">{title}</h3>
        <p className="font-sans text-sm text-nearBlack/80">{blurb}</p>
      </Card>
    </motion.div>
  )
}
