import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/product', label: 'Product' },
    { to: '/solution', label: 'Solution' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About Us' },
    { to: '/download', label: 'Download' },
    { to: '/admin/login', label: 'Admin' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            revARR
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-slate-400 hover:text-white transition-all text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <button
                  onClick={() => navigate('/admin/chats')}
                  className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white transition-all"
                >
                  <MessageCircle size={20} />
                  <span className="font-medium">Messages</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all"
              >
                Login
              </button>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-400 hover:text-white transition-all py-2"
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <button
                  onClick={() => {
                    navigate('/admin/chats')
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-all py-2"
                >
                  <MessageCircle size={20} />
                  <span>Messages</span>
                </button>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  navigate('/login')
                  setIsMenuOpen(false)
                }}
                className="px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all"
              >
                Login
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
