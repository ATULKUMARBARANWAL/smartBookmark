'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import BookmarkForm from '@/components/BookmarkForm'
import BookmarkList from '@/components/BookmarkList'
import Navbar from '@/components/Navbar'
export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
const [refresh, setRefresh] = useState(0)

const refreshList = () => {
  setRefresh(prev => prev + 1)
}

  useEffect(() => {


    // 🔥 Get current session
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data.session?.user || null)
    }

    getSession()

    // 🔥 Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setUser(session?.user || null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  // 🔥 FIX: Only show loading when undefined
  if (user === null) {
    return <p>Loading user...</p>
  }


  return (
    <div >
      <Navbar user={user} />
      <div className="p-6">
      <BookmarkForm user={user} onAdd={refreshList} />
      <BookmarkList user={user} refresh={refresh} />
      </div>
    </div>
  )
}
