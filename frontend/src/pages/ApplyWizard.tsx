import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { useAuth } from '../context/AuthProvider'
import { motion } from 'framer-motion'

const petSchema = z.object({
  name: z.string().min(1),
  breed: z.string().min(1),
  age: z.string().min(1),
})

const formSchema = z.object({
  client: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
  }),
  pets: z.array(petSchema),
  services: z.array(z.string()),
})

type FormData = z.infer<typeof formSchema>

export function ApplyWizard() {
  const [step, setStep] = useState(1)
  const { addApplication } = useAuth()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { pets: [{ name: '', breed: '', age: '' }], services: [] },
  })
  const { register, control, handleSubmit, watch } = form
  const { fields, append, remove } = useFieldArray({ control, name: 'pets' })

  const next = handleSubmit(() => setStep((s) => s + 1))
  const prev = () => setStep((s) => s - 1)

  const onSubmit = handleSubmit(async (data) => {
    await axios.post('/api/applications', data)
    addApplication(data)
    setStep(5)
  })

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto py-16 max-w-xl space-y-4">
      <div className="mb-4 h-2 bg-brandBrown/20 rounded">
        <div className="bg-brandBrown h-full" style={{ width: `${(step - 1) / 4 * 100}%` }} />
      </div>
      {step === 1 && (
        <form onSubmit={next} className="space-y-4">
          <Input placeholder="Full Name" {...register('client.name')} />
          <Input placeholder="Email" type="email" {...register('client.email')} />
          <Input placeholder="Phone" {...register('client.phone')} />
          <Button type="submit">Next</Button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={next} className="space-y-4">
          {fields.map((field, idx) => (
            <div key={field.id} className="space-y-2 border p-3 rounded-xl">
              <Input placeholder="Pet Name" {...register(`pets.${idx}.name` as const)} />
              <Input placeholder="Breed" {...register(`pets.${idx}.breed` as const)} />
              <Input placeholder="Age" {...register(`pets.${idx}.age` as const)} />
              {fields.length > 1 && (
                <Button type="button" variant="secondary" onClick={() => remove(idx)}>Remove</Button>
              )}
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={() => append({ name: '', breed: '', age: '' })}>Add Pet</Button>
          <div className="flex gap-2">
            <Button type="button" variant="secondary" onClick={prev}>Back</Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={next} className="space-y-4">
          <label className="block"><input type="checkbox" value="Daily walks" {...register('services')} /> Daily walks</label>
          <label className="block"><input type="checkbox" value="Drop-in visits" {...register('services')} /> Drop-in visits</label>
          <label className="block"><input type="checkbox" value="Pet taxi" {...register('services')} /> Pet taxi</label>
          <label className="block"><input type="checkbox" value="Grooming scheduling" {...register('services')} /> Grooming scheduling</label>
          <div className="flex gap-2">
            <Button type="button" variant="secondary" onClick={prev}>Back</Button>
            <Button type="submit">Review</Button>
          </div>
        </form>
      )}
      {step === 4 && (
        <form onSubmit={next} className="space-y-4">
          <pre className="bg-offWhite p-4 rounded-xl text-sm overflow-auto max-h-52">{JSON.stringify(watch(), null, 2)}</pre>
          <div className="flex gap-2">
            <Button type="button" variant="secondary" onClick={prev}>Back</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      )}
      {step === 5 && (
        <p className="text-center">We’ll contact you to schedule a meet-and-greet before account setup.</p>
      )}
    </motion.section>
  )
}
