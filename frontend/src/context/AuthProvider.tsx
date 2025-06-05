import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface Application {
  [key: string]: unknown
}

interface AuthContext {
  user: string | null
  login: (email: string, pass: string) => void
  logout: () => void
  applications: Application[]
  addApplication: (a: Application) => void
}

const AuthCtx = createContext<AuthContext | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null)
  const [applications, setApplications] = useState<Application[]>([])

  const login = (email: string, pass: string) => {
    if (email === 'admin@tpcc.local' && pass === 'AdminPass!23') {
      setUser('admin')
    } else {
      setUser(email)
    }
  }
  const logout = () => setUser(null)
  const addApplication = (a: Application) => setApplications((p) => [...p, a])

  return (
    <AuthCtx.Provider value={{ user, login, logout, applications, addApplication }}>
      {children}
    </AuthCtx.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthCtx)
  if (!ctx) throw new Error('useAuth must be within AuthProvider')
  return ctx
}
