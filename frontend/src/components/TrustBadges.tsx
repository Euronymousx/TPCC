import { motion } from 'framer-motion'

const badges = [
  'Background-checked',
  'High-vis gear',
  'Belt-attached leashes',
  'CPR certified',
  'Insured & bonded',
  'Crash-tested transport',
  'Body-cams',
  'Two-walker teams',
  'GPS trackers',
  'Heated winter jackets',
]

export function TrustBadges() {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-offWhite py-8 flex flex-wrap justify-center gap-4 text-sm"
    >
      {badges.map((b) => (
        <li key={b} className="px-3 py-1 bg-brandBrown text-offWhite rounded-full shadow">
          {b}
        </li>
      ))}
    </motion.ul>
  )
}
