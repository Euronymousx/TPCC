import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { motion } from 'framer-motion'

const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Required'),
})

export function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <motion.section id="contact" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto py-16 max-w-lg space-y-4">
      <h2 className="text-3xl font-display text-brandBrown text-center">Contact Us</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Input placeholder="Name" {...register('name')} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message as string}</p>}
        </div>
        <div>
          <Input placeholder="Email" type="email" {...register('email')} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
        </div>
        <div>
          <Textarea placeholder="Message" rows={4} {...register('message')} />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message as string}</p>}
        </div>
        <Button type="submit">Send Message</Button>
      </form>
      <div className="h-64 bg-brandBrown/10 rounded-card flex items-center justify-center">
        Map placeholder
      </div>
    </motion.section>
  )
}
