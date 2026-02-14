# 🔖 Bookmark App

A modern Bookmark Management Application built using Next.js, Supabase, and Tailwind CSS.
Users can securely log in with Google Authentication, add bookmarks, and experience real-time updates.

--------------------------------------------------

🚀 Features

- Google OAuth Authentication (Supabase Auth)
- Add & Delete Bookmarks
- Real-time updates using Supabase Realtime
- Row Level Security (RLS)
- Responsive UI
- Instant UI updates

--------------------------------------------------

🛠️ Tech Stack

Frontend: Next.js
Backend: Supabase
Styling: Tailwind CSS
Auth: Google OAuth
Deployment: Vercel

--------------------------------------------------

⚙️ Environment Variables

Create .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

--------------------------------------------------

🗄️ Supabase Setup

1. Create Table: bookmarks

Columns:
id (uuid, primary key)
user_id (uuid)
title (text)
url (text)
created_at (timestamp)

2. Enable RLS

3. Create Policy:

auth.uid() = user_id

4. Enable Realtime (Insert, Update, Delete)

--------------------------------------------------

🔐 Google Auth Setup

1. Create OAuth Client in Google Cloud
2. Add redirect URL:
https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback

3. Add Client ID & Secret in Supabase

--------------------------------------------------

🧪 Run Project

npm install
npm run dev

Open: http://localhost:3000

--------------------------------------------------

🌐 Deployment

1. Push to GitHub
2. Import project in Vercel
3. Add env variables
4. Deploy

--------------------------------------------------

👨‍💻 Author

Atul Baranwal

--------------------------------------------------

⭐ If you like this project, give it a star!
