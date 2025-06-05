import { useForm } from 'react-hook-form'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export function RegisterPage() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(() => {
    navigate('/login')
  })

  return (
    <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="container mx-auto py-16 max-w-sm space-y-4">
      <Input placeholder="Username" {...register('user')} />
      <Input placeholder="Email" {...register('email')} />
      <Input placeholder="Password" type="password" {...register('pass')} />
      <Button type="submit">Register</Button>
    </motion.form>
  )
}
