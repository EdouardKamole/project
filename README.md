# Scholarvia 🎓🌍
**Connecting Students to Scholarships Worldwide**

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Database**: PostgreSQL via Prisma ORM
- **Auth**: BetterAuth
- **Email**: Resend
- **Payments**: SeerBit
- **Storage**: AWS S3 or Cloudinary
- **Hosting**: Vercel + Neon PostgreSQL

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Fill in your DATABASE_URL and other keys

# 3. Set up the database
npx prisma generate
npx prisma db push

# 4. Run the dev server
npm run dev
```

## Development Phases
- **Phase 1** — Authentication (register, login, roles, dashboards)
- **Phase 2** — Scholarship System (listing, search, apply)
- **Phase 3** — University System (dashboard, review, accept/reject)
- **Phase 4** — Payments & Notifications
- **Phase 5** — Analytics & AI Recommendations
