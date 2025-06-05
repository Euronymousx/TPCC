import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export function Layout() {
  const { user, logout } = useAuth()
  return (
    <div className="min-h-screen flex flex-col font-sans bg-offWhite text-nearBlack">
      <header className="sticky top-0 z-20 bg-offWhite/80 backdrop-blur-md shadow">
        <nav className="container mx-auto flex justify-between py-4">
          <div className="font-display text-2xl">TPCC</div>
          <div className="space-x-4">
            <Link to="/" className="hover:text-brandBrown">Home</Link>
            <Link to="/services" className="hover:text-brandBrown">Services</Link>
            <Link to="/about" className="hover:text-brandBrown">About</Link>
            <Link to="/contact" className="hover:text-brandBrown">Contact</Link>
            <Link to="/apply" className="hover:text-brandBrown">Apply</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-brandBrown">Dashboard</Link>
                <button onClick={logout} className="ml-2 hover:text-brandBrown">Logout</button>
              </>
            ) : (
              <Link to="/login" className="hover:text-brandBrown">Login</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-nearBlack text-offWhite py-6 text-center font-sans">
        © {new Date().getFullYear()} The Pet Concierge Company
      </footer>
    </div>
  )
}
