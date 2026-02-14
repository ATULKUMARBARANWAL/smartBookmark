'use client'

import { supabase } from '@/lib/supabaseClient'
import { FcGoogle } from 'react-icons/fc'
export default function LoginPage() {

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://smart-bookmark-plum.vercel.app/dashboard'
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">

      {/* Card */}
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 text-center mb-6 text-sm">
          Sign in to manage your bookmarks
        </p>

        {/* Disabled Inputs */}
        <div className="space-y-4 mb-6">

          <input
            type="email"
            placeholder="Email address"
            disabled
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-500 cursor-not-allowed"
          />

          <input
            type="password"
            placeholder="Password"
            disabled
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-500 cursor-not-allowed"
          />

        </div>

        {/* Info Message */}
        <p className="text-xs text-gray-400 text-center mb-4">
          🔒 Email & Password login is disabled. Please use Google Sign-In.
        </p>

        {/* Google Button */}
        <button
          onClick={handleLogin}
          className="w-full cursor-pointer flex items-center justify-center gap-3 bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

      </div>
    </div>
  )
}
