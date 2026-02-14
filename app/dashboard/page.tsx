'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import BookmarkForm from '@/components/BookmarkForm'
import BookmarkList from '@/components/BookmarkList'
import Navbar from '@/components/Navbar'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(undefined)
  const [refresh, setRefresh] = useState(0)

  const refreshList = () => {
    setRefresh(prev => prev + 1)
  }

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession()

      if (!data.session) {
        router.push('/login')
      } else {
        setUser(data.session.user)
      }
    }

    checkUser()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          router.push('/login')
        } else {
          setUser(session.user)
        }
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [router])

  if (user === undefined) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Navbar user={user} />
      <div className="p-6">
        <BookmarkForm user={user} onAdd={refreshList} />
        <BookmarkList user={user} refresh={refresh} />
      </div>
    </div>
  )
}
