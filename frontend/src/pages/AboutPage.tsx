import { motion } from 'framer-motion'

export function AboutPage() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto py-16 space-y-6">
      <h2 className="text-3xl font-display text-brandBrown">About Us</h2>
      <p>Founded in 2025 with a mission to elevate pet care through concierge-level service.</p>
      <ol className="list-decimal ml-6 space-y-1">
        <li>Idea</li>
        <li>Pilot Clients</li>
        <li>Launch</li>
      </ol>
    </motion.section>
  )
}
