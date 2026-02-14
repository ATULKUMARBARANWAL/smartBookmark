'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
const user = session?.user


      if (user) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    }

    checkUser()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Checking authentication...</p>
    </div>
  )
}
