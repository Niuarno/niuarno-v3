# Portfolio Website

A modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, and Supabase.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Database**: Supabase (PostgreSQL) via Prisma ORM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Setup Guide

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **"New Project"** and fill in the details
3. Set a **database password** — save it, you'll need it later
4. Choose a **region** closest to your users
5. Wait for the project to provision (~2 minutes)

### 2. Get Your Database Connection Strings

1. In your Supabase dashboard, go to **Settings → Database**
2. Find the **Connection string** section
3. You need **two** connection strings:

| Variable | Which string to use | Purpose |
|----------|-------------------|---------|
| `DATABASE_URL` | **Transaction pooler** (Port 6543) | App runtime queries (recommended for serverless) |
| `DIRECT_URL` | **Session mode** (Port 5432) | Prisma migrations & schema commands |

4. For each string:
   - Select **"URI"** tab
   - Copy the connection string
   - Replace `[YOUR-PASSWORD]` with your actual database password

### 3. Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your Supabase connection strings:

```env
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].supabase.com:5432/postgres"
```

### 4. Install Dependencies

```bash
npm install
# or
bun install
```

### 5. Setup Database

Generate the Prisma client and push your schema to Supabase:

```bash
npx prisma generate
npx prisma db push
```

### 6. Run Development Server

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy to Vercel

### Step 1: Push to Git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New" → "Project"**
3. Import your GitHub repository
4. **Framework Preset**: Next.js (auto-detected)

### Step 3: Configure Environment Variables

In your Vercel project settings → **Environment Variables**, add:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | Your Supabase **Transaction pooler** URI |
| `DIRECT_URL` | Your Supabase **Session mode** URI |

### Step 4: Deploy

Click **"Deploy"**. Vercel will:
1. Install dependencies (runs `postinstall` → `prisma generate`)
2. Build the Next.js app
3. Deploy to production

### Step 5: Push Schema (First Time Only)

After your first deployment, push your database schema to Supabase:

```bash
npx prisma db push
```

Or if you prefer migrations:

```bash
npx prisma migrate dev --name init
npx prisma migrate deploy
```

---

## Supabase Dashboard

Your Supabase dashboard provides:
- **Table Editor**: View and manage your `contact_messages` and `users` tables
- **SQL Editor**: Run raw SQL queries
- **Auth**: Built-in authentication (ready for NextAuth integration)
- **Storage**: File storage (for future uploads)
- **Realtime**: Real-time subscriptions

---

## Project Structure

```
├── prisma/
│   └── schema.prisma       # Database schema (PostgreSQL/Supabase)
├── public/
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts & metadata
│   │   ├── page.tsx        # Home page (all sections)
│   │   ├── globals.css     # Global styles
│   │   └── api/
│   │       ├── route.ts    # Health check endpoint
│   │       └── contact/
│   │           └── route.ts # Contact form submission
│   ├── components/
│   │   ├── portfolio/      # Portfolio section components
│   │   │   ├── portfolio-header.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── globe-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── portfolio-footer.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── hooks/              # Custom React hooks
│   └── lib/
│       ├── db.ts           # Prisma client (Supabase)
│       └── utils.ts        # Utility functions
├── .env.example            # Environment variable template
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## Database Schema

| Table | Columns | Description |
|-------|---------|-------------|
| `contact_messages` | id, name, email, subject, message, read, created_at, updated_at | Contact form submissions |
| `users` | id, email, name, created_at, updated_at | User accounts |

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run lint             # Run ESLint

# Database
npx prisma studio        # Open Prisma Studio (visual DB browser)
npx prisma db push       # Push schema changes to database
npx prisma generate      # Regenerate Prisma client
npx prisma migrate dev   # Create & apply a migration
npx prisma migrate deploy # Apply pending migrations (production)
```

## Troubleshooting

### "P1001: Can't reach database server"
- Verify your `DATABASE_URL` and `DIRECT_URL` are correct
- Make sure your Supabase project is not paused (free tier pauses after 1 week of inactivity)
- Check that you replaced `[YOUR-PASSWORD]` in the connection string

### "Prisma Client not generated"
- Run `npx prisma generate`
- Make sure `postinstall` script exists in `package.json`

### Vercel build fails
- Check that all environment variables are set in Vercel dashboard
- Try redeploying: `vercel --prod`

---

## License

Private project.
