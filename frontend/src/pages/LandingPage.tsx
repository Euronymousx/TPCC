import { Hero } from '../components/Hero'
import { motion } from 'framer-motion'

export function LandingPage() {
  return (
    <div>
      <Hero />
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container mx-auto py-16 space-y-8">
        <h2 className="text-3xl font-display text-center text-brandBrown">Our Promise</h2>
        <p className="text-center max-w-2xl mx-auto">We deliver unmatched pet care and concierge services so you can enjoy peace of mind knowing your companions are in expert hands.</p>
      </motion.section>
    </div>
  )
}
