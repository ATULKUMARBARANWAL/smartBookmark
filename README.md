Smart Bookmark App

A modern full-stack bookmark management application built using Next.js,
Supabase, and Tailwind CSS. It allows users to securely save, manage,
and access their bookmarks with real-time updates.

------------------------------------------------------------------------

🚀 Features

-   Google OAuth Authentication
-   Add & Delete Bookmarks
-   Real-time updates using Supabase
-   Secure data with Row Level Security (RLS)
-   Responsive UI
-   Optimistic UI updates

------------------------------------------------------------------------

🛠 Tech Stack

-   Frontend: Next.js (App Router)
-   Backend: Supabase (Auth + Database + Realtime)
-   Styling: Tailwind CSS

------------------------------------------------------------------------

⚙️ Setup Instructions

1.  Clone the repository

    git clone https://github.com/your-username/smartBookmark.git

2.  Install dependencies

    npm install

3.  Create .env.local file

    NEXT_PUBLIC_SUPABASE_URL=your_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

4.  Run project

    npm run dev

------------------------------------------------------------------------

🔐 Database Setup

Create a table named bookmarks with columns: - id (uuid, primary key) -
user_id (uuid) - title (text) - url (text) - created_at (timestamp)

Enable Row Level Security (RLS)

Add policy:

auth.uid() = user_id

------------------------------------------------------------------------

🧠 Key Challenges & Solutions

1.  Handling Real-Time Updates

Problem: Realtime updates were not reflecting instantly in the same tab.

Solution: Used Optimistic UI updates for instant feedback and realtime
listeners for cross-tab sync.

------------------------------------------------------------------------

2.  Securing Data with RLS

Problem: Users could potentially access other users’ data.

Solution: Enabled Row Level Security and used policy: auth.uid() =
user_id

------------------------------------------------------------------------

3.  Managing Realtime Subscriptions

Problem: Multiple subscriptions caused duplicate or missing events.

Solution: Used unique channel per user and cleaned up subscriptions
properly.

------------------------------------------------------------------------

🌐 Deployment

1.  Push code to GitHub
2.  Deploy on Vercel
3.  Add environment variables
4.  Run application

------------------------------------------------------------------------

👨‍💻 Author

Atul Baranwal
