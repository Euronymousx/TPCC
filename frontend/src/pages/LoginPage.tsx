import { useForm } from 'react-hook-form'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    login(data.email, data.pass)
    navigate('/dashboard')
  })

  return (
    <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="container mx-auto py-16 max-w-sm space-y-4">
      <Input placeholder="Email" type="email" {...register('email')} />
      <Input placeholder="Password" type="password" {...register('pass')} />
      <Button type="submit">Login</Button>
    </motion.form>
  )
}
