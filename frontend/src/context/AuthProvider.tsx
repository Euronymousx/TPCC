import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface AuthContext {
  user: string | null
  login: (u: string) => void
  logout: () => void
}

const AuthCtx = createContext<AuthContext | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null)

  const login = (u: string) => setUser(u)
  const logout = () => setUser(null)

  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthCtx)
  if (!ctx) throw new Error('useAuth must be within AuthProvider')
  return ctx
}
