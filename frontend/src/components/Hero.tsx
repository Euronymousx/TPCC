import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/Button'

export function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-offWhite text-nearBlack">
      <motion.img
        src="/img/logo-walker.png"
        alt="TPCC logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-40 md:w-60 mb-8"
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center text-4xl md:text-6xl font-display"
      >
        Luxury Dog-Walking &amp; Pet Care, Reimagined.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-center max-w-xl"
      >
        Daily walks, safety-first practices, concierge-level service.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex gap-4">
        <Button onClick={() => navigate('/apply')}>Apply Online</Button>
        <Button variant="secondary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
          See Pricing
        </Button>
      </motion.div>
    </section>
  )
}
