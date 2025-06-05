import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { motion } from 'framer-motion'

const schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  experience: z.string().min(1),
})

type FormData = z.infer<typeof schema>

export function ApplyWizard() {
  const [step, setStep] = useState(1)
  const { register, handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = handleSubmit(async (data) => {
    await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/applications`, data)
    setStep(3)
  })

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto py-16 max-w-xl">
      <div className="mb-4 h-2 bg-brandBrown/20 rounded"><div className="bg-brandBrown h-full" style={{ width: `${step * 50}%` }} /></div>
      {step === 1 && (
        <form onSubmit={() => setStep(2)} className="space-y-4">
          <Input placeholder="Full Name" {...register('name')} />
          <Input placeholder="Phone" {...register('phone')} />
          <Button type="submit">Next</Button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={onSubmit} className="space-y-4">
          <Input placeholder="Experience" {...register('experience')} />
          <div className="flex gap-2">
            <Button type="button" variant="secondary" onClick={() => setStep(1)}>Back</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      )}
      {step === 3 && <p className="text-center">Application submitted!</p>}
    </motion.section>
  )
}
