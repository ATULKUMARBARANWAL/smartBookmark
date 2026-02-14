'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function BookmarkForm({ user, onAdd }: any) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const addBookmark = async () => {
    if (!title || !url) return

    setLoading(true)

    const { error } = await supabase.from('bookmarks').insert([
      {
        title,
        url,
        user_id: user.id,
      },
    ])

    setLoading(false)

    if (error) {
      console.log(error)
      alert("Failed to add bookmark")
      return
    }

    onAdd()

    setTitle('')
    setUrl('')
  }

  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-800">
      
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4 text-gray-200">
        Add New Bookmark
      </h2>

      {/* Inputs */}
      <div className="flex flex-col md:flex-row gap-3">
        
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className="flex-1 p-3 rounded-md bg-gray-800 border border-gray-700 text-white 
          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL..."
          className="flex-1 p-3 rounded-md bg-gray-800 border border-gray-700 text-white 
          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button
          onClick={addBookmark}
          disabled={loading}
          className={`px-5 py-3 rounded-md font-medium transition  cursor-pointer
          ${loading 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-green-500 hover:bg-green-600 active:scale-95'}
          `}
        >
          {loading ? 'Adding...' : 'Add'}
        </button>

      </div>
    </div>
  )
}
