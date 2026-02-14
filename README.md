Smart Bookmark App

A full-stack Bookmark Management application built using Next.js,
Supabase, and Tailwind CSS.

------------------------------------------------------------------------

🚀 Overview

This project allows users to:

-   Login using Google OAuth
-   Add bookmarks (title + URL)
-   View bookmarks
-   Delete bookmarks
-   See real-time updates across multiple tabs

------------------------------------------------------------------------

🛠 Tech Stack

-   Frontend: Next.js (App Router)
-   Backend: Supabase (Auth + Database + Realtime)
-   Styling: Tailwind CSS
-   Deployment: Vercel

------------------------------------------------------------------------

⚙️ Setup Instructions

1.  Clone the repository

    git clone https://github.com/ATULKUMARBARANWAL/smartBookmark

2.  Install dependencies

    npm install

3.  Create .env.local file

    NEXT_PUBLIC_SUPABASE_URL=your_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

4.  Run project

    npm run dev

------------------------------------------------------------------------

🔐 Supabase Setup

1.  Create table ‘bookmarks’ with columns:

    -   id (uuid)
    -   user_id (uuid)
    -   title (text)
    -   url (text)
    -   created_at (timestamp)

2.  Enable Row Level Security (RLS)

3.  Add policy:

    auth.uid() = user_id

4.  Enable Realtime for bookmarks table

------------------------------------------------------------------------

🔑 Google Authentication Setup

-   Enable Google provider in Supabase
-   Add Client ID and Secret from Google Console
-   Add callback URL from Supabase into Google Console

------------------------------------------------------------------------

❗ Problems Faced & Solutions

1. Google Login Error (Unsupported provider)

Problem: Google login was failing with error: “Unsupported provider:
provider is not enabled”

Solution: Enabled Google provider in Supabase Auth settings and added
Client ID and Secret.

------------------------------------------------------------------------

2. useEffect not running

Problem: useEffect was not triggering.

Solution: user.id was undefined initially. Fixed by checking:

if (!user?.id) return

------------------------------------------------------------------------

3. Realtime not working

Problem: Realtime updates were not working.

Solution: Enabled realtime for bookmarks table in Supabase dashboard.

------------------------------------------------------------------------

4. Realtime not updating same tab

Problem: Changes only visible after refresh or tab switch.

Solution: Used optimistic UI update:

setBookmarks(prev => prev.filter(…))

and also used realtime listener.

------------------------------------------------------------------------

5. WebSocket connection failed

Problem: Realtime WebSocket was closing.

Solution: Checked environment variables and enabled realtime.

------------------------------------------------------------------------

6. Git push error (main branch)

Problem: fatal: main cannot be resolved to branch

Solution: Branch name mismatch. Fixed using:

git branch -m main

------------------------------------------------------------------------

7. Google icon not visible

Problem: Google icon was broken.

Solution: Used public folder or external image link.

------------------------------------------------------------------------

📦 Deployment

1.  Push code to GitHub
2.  Go to Vercel
3.  Import project
4.  Add environment variables
5.  Deploy

------------------------------------------------------------------------

🔗 Live Demo

(Add your Vercel link here)

------------------------------------------------------------------------

👨‍💻 Author

Atul Baranwal
