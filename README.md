# Vanesa Arneta — Portfolio

A single-page, editorial-style personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. See the full handoff notes in the chat response this project was delivered with — this file is a quick reference.

## Requirements

- Node.js 18.18+ (LTS 20 recommended)
- npm
- Git

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Where things live

- `data/content.ts` — every fact on the site (bio, experience, dates, numbers, skills, contact). Edit this file to change any copy.
- `components/` — one file per section (Hero, About, FeaturedExperience, ImpactStrip, Ledger, Leadership, EventsPeople, EducationSkills, Contact).
- `components/ImageFrame.tsx` — the placeholder/photo component. Pass a `src` prop once an image exists in `public/images/...` to swap the placeholder for the real photo.
- `public/images/` — drop photos here (`experience/`, `events/`, `editorial/`, plus `profile.webp` at the root of `public/images/`).
- `app/globals.css` — base styles, focus states, reduced-motion handling.
- `tailwind.config.ts` — color palette, fonts, spacing tokens.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com, "Add New Project," import the repository.
3. Framework preset: Next.js (auto-detected). No environment variables are required.
4. Deploy. Every subsequent `git push` to `main` redeploys automatically.
