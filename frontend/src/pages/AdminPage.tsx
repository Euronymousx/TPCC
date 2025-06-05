import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthProvider'
import { Button } from '../components/ui/Button'
import { v4 as uuidv4 } from 'uuid'

export function AdminPage() {
  const { applications, login } = useAuth()
  const [unlocked, setUnlocked] = useState(false)
  const [pass, setPass] = useState('')

  if (!unlocked) {
    const tryUnlock = () => {
      if (pass === 'AdminPass!23') {
        login('admin@tpcc.local', 'AdminPass!23')
        setUnlocked(true)
      }
    }
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto py-16 max-w-sm space-y-4">
        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} className="border px-3 py-2 w-full" />
        <Button onClick={tryUnlock}>Enter</Button>
      </motion.div>
    )
  }

  const copy = (id: string) => navigator.clipboard.writeText(`https://tpcc.local/register/temp/${id}`)

  return (
    <section className="container mx-auto py-16 space-y-4">
      <h2 className="text-3xl font-display">Applications</h2>
      <ul className="space-y-2">
        {applications.map((a, i) => (
          <li key={i} className="bg-offWhite rounded-card p-4 flex justify-between items-center">
            <span>{(a as any).client?.name || (a as any).name}</span>
            <Button onClick={() => copy(uuidv4())}>Generate Temporary Signup Link</Button>
          </li>
        ))}
      </ul>
    </section>
  )
}
