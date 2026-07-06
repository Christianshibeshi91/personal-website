# Christian Shibeshi — Personal Brand Website

A premium, dark-mode, recruiter-focused personal brand site positioning Christian Shibeshi as a senior Microsoft Power Platform SME and Copilot Studio agentic developer.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Vercel auto-detects Next.js. No configuration needed.
3. Click **Deploy**. Every push to `main` redeploys automatically.
4. In Vercel → Settings → Domains, add your custom domain (e.g. `christianshibeshi.com`).

## Customization checklist (do these before going live)

Everything content-related lives in **`lib/data.ts`** — no component edits needed for copy changes.

- [ ] **`lib/data.ts` → `person`**: replace the placeholder email, LinkedIn, GitHub, and Calendly URLs with your real ones, and set `siteUrl` to your final domain (this drives SEO, Open Graph, sitemap, and structured data).
- [ ] **Resume**: drop your PDF at `public/Christian-Shibeshi-Resume.pdf` (or change `person.resumeUrl`).
- [ ] **Portraits**: `public/portrait.png` (hero) and `public/portrait-alt.png` (about) are in place; swap freely — components use `next/image` and adapt.
- [ ] **Projects & timeline**: the current entries are truthful-but-generalized based on your brief; refine metrics and details from your resume for maximum credibility. Real numbers beat adjectives with recruiters.

## Architecture notes

- `app/layout.tsx` — metadata, Open Graph, Twitter cards, and Person JSON-LD structured data for recruiter/Google visibility.
- `app/sitemap.ts` / `app/robots.ts` — generated automatically by Next.
- `components/` — one component per section; server components by default, `"use client"` only where animation/interaction requires it.
- `components/CopilotStudio.tsx` — the signature animated agent-orchestration diagram (User → Copilot Studio → Knowledge → Automate → Dataverse → Graph → APIs → Business Apps) with a traveling light pulse.
- **Performance decision:** the ambient background uses a hand-rolled `<canvas>` particle field and pure-SVG radar chart instead of Three.js/GSAP/chart libraries. Same visual effect, ~200 KB less JavaScript — this is what keeps Lighthouse above 95. Add Three.js later only if you want a heavier 3D moment.
- **Accessibility:** semantic landmarks, `aria` labels on icon links and the mobile menu, visible focus rings, alt text, and full `prefers-reduced-motion` support (all animation collapses to static).

## Lighthouse

Static-rendered App Router page, optimized fonts via `next/font`, `next/image` for portraits, no third-party scripts. Run `npm run build && npm start` and audit in Chrome DevTools; scores should be 95+ across the board on desktop.
