import { motion } from 'framer-motion'

export function AboutPage() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto py-16 space-y-6">
      <h2 className="text-3xl font-display text-brandBrown">About Us</h2>
      <p>Founded with a passion for pets, TPCC has served our community for over a decade providing bespoke care solutions.</p>
      <p>Our experienced team treats every pet like family, ensuring comfort and safety at all times.</p>
    </motion.section>
  )
}
