import { Button } from './ui/Button'
import { motion } from 'framer-motion'
const heroBg = 'linear-gradient(120deg, #9b6c3e 0%, #50b9a7 100%)'

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: heroBg }}>
      <div className="absolute inset-0 bg-nearBlack/60 backdrop-blur-sm" />
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center text-offWhite space-y-6">
        <h1 className="text-4xl md:text-6xl font-display">Premium Care for Your Beloved Pets</h1>
        <p className="max-w-xl mx-auto font-sans">Experience bespoke concierge services designed to pamper your furry family members.</p>
        <Button onClick={scrollToContact} className="animation-pulse">Book a Consultation</Button>
      </motion.div>
    </section>
  )
}
