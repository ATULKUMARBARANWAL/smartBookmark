'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import BookmarkItem from './BookmarkItem'

export default function BookmarkList({ user, refresh }: any)  {
  const [bookmarks, setBookmarks] = useState<any[]>([])

  const handleDelete = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id))
  }
  const fetchBookmarks = async () => {
    const { data, error } = await supabase
      .from('bookmarks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) console.log(error)

    setBookmarks(data || [])
  }
useEffect(() => {
  if (!user?.id) return

  console.log("useEffect START 🔥", user.id)

  fetchBookmarks()

  const channel = supabase
    .channel('realtime-bookmarks')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'bookmarks',
        filter: `user_id=eq.${user.id}`,
      },
      (payload) => {
        console.log("Realtime change:", payload)
        fetchBookmarks()
      }
    )
    .subscribe((status) => {
      console.log("SUB STATUS:", status)
    })

  return () => {
    supabase.removeChannel(channel)
  }
}, [user, refresh]) // 🔥 IMPORTANT

  return (
    <div>
      {bookmarks.map((b) => (
        <BookmarkItem key={b.id} bookmark={b} 
           onDelete={handleDelete} 
        />
      ))}
    </div>
  )
}
