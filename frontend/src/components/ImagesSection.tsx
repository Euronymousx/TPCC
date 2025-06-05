import { motion } from 'framer-motion'

const images = [
  { src: 'https://via.placeholder.com/600x400', caption: 'Happy dog on walk' },
  { src: 'https://via.placeholder.com/600x400', caption: 'Two walkers in high-vis gear' },
  { src: 'https://via.placeholder.com/600x400', caption: 'Crash-tested kennel in van' },
]

export function ImagesSection() {
  return (
    <section className="container mx-auto py-16 grid md:grid-cols-3 gap-8">
      {images.map((img) => (
        <motion.figure key={img.caption} whileHover={{ scale: 1.03 }} className="shadow-2xl rounded-3xl overflow-hidden">
          <img src={img.src} alt={img.caption} className="w-full" />
          <figcaption className="p-2 text-center text-sm">{img.caption}</figcaption>
        </motion.figure>
      ))}
    </section>
  )
}
