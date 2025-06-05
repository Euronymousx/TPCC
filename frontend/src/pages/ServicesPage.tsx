import { ServiceCard } from '../components/ServiceCard'
import { motion } from 'framer-motion'

const services = [
  { icon: '🐶', title: 'Dog Walking', blurb: 'Daily adventures tailored to your pup.' },
  { icon: '🐱', title: 'Cat Sitting', blurb: 'Keeping your feline friends content.' },
  { icon: '🏠', title: 'House Visits', blurb: 'Home check-ins while you are away.' },
]

export function ServicesPage() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto py-16 grid md:grid-cols-3 gap-8">
      {services.map((s) => (
        <ServiceCard key={s.title} icon={s.icon} title={s.title} blurb={s.blurb} />
      ))}
    </motion.section>
  )
}
