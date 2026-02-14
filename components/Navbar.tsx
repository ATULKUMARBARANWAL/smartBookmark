'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function Navbar({ user }: any) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-semibold text-white">
          🔖 Bookmark
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-gray-300 text-sm">
            {user?.email}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-lg text-sm transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <p className="text-gray-300 text-sm mb-2">
            {user?.email}
          </p>

          <button
            onClick={handleLogout}
   className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition active:scale-95"

          >
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}
