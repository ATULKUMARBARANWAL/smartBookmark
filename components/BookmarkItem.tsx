'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Trash2 } from 'lucide-react'

export default function BookmarkItem({ bookmark, onDelete }: any) {
  const [loading, setLoading] = useState(false)

  const deleteBookmark = async () => {
    const confirmDelete = confirm("Delete this bookmark?")
    if (!confirmDelete) return

    // 🔥 Instant UI update
    if (onDelete) onDelete(bookmark.id)

    setLoading(true)

    const { error } = await supabase
      .from('bookmarks')
      .delete()
      .eq('id', bookmark.id)

    setLoading(false)

    if (error) {
      console.log(error)
      alert("Delete failed")
    }
  }

  return (
    <div className="flex items-center justify-between bg-gray-900 border border-gray-800 
    rounded-lg p-4 mb-3 shadow-sm hover:shadow-md hover:border-gray-700 transition">

      <div className="flex flex-col gap-1">
        <h3 className="text-white font-semibold text-lg">
          {bookmark.title}
        </h3>

        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm hover:underline break-all"
        >
          {bookmark.url}
        </a>
      </div>

      <button
        onClick={deleteBookmark}
        disabled={loading}
        className="p-2 rounded-md cursor-pointer bg-red-500/10 hover:bg-red-500/20 text-red-400 
        transition active:scale-90"
      >
        {loading ? <span className="text-xs">...</span> : <Trash2 size={18} />}
      </button>
    </div>
  )
}
