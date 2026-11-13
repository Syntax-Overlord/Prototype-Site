# NexStep Summit Website

A premium, identity-first, fully responsive Next.js homepage for NexStep's summit debut. Built as a lightweight static export that deploys to Vercel **without any backend or database**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

Next.js generates a fully static site in `out/` (`output: 'export'`). There are no API routes, server actions, or database dependencies.

## Deploy to Vercel

1. Upload this project to a GitHub repository.
2. In Vercel, select **Add New Project**, import that repository, and leave the Next.js framework preset selected.
3. Use `npm run build` as build command. Vercel supports this Next.js static export.
4. Deploy. Add your custom domain later if needed.
5. Configure `NEXT_PUBLIC_WAITLIST_ENDPOINT` in Vercel project Environment Variables and redeploy **before collecting summit leads**.

### Waitlist without a backend

The waitlist frontend is complete, but a browser-only site **cannot reliably receive or store signups for the founders** without an external service.

This project supports third-party form handlers such as Formspree without requiring a Next.js backend:

- Create a form on Formspree (or provide another endpoint that accepts JSON POST).
- Put its full HTTPS endpoint in `NEXT_PUBLIC_WAITLIST_ENDPOINT` (locally in `.env.local`, on Vercel in project environment variables).
- Redeploy the site. Form submissions will go directly from the browser to the service.
- Test name, email, role, source, and consent end to end in a live deployment.

**When no endpoint is configured**, the UI clearly says **PREVIEW MODE**. It does **not** save or send personal details and explicitly does **not** claim a real signup. Connect an external form endpoint before accepting summit registrations.

The site can also optionally show an approved email via `NEXT_PUBLIC_CONTACT_EMAIL`. No company email address has been invented.

## Summit QR code

Once the site has a real live URL, run:

```bash
pip install 'qrcode[pil]'
python scripts/generate_qr.py https://your-project.vercel.app
```

This generates `public/summit-qr.png`, a high-resolution QR asset suitable for display or print, encoding the URL with `?source=summit_qr`. Test with an actual phone. **Do not print a QR before knowing the final URL.** The script is bundled; a final QR was intentionally not fabricated.

## Edit content

All major data is in `src/data/site.ts`:

- `milestones`: Add or remove any achievements. Cards render dynamically.
- `today`: Currently offered community programs.
- `tracks`: Planned technology and entrepreneurship features.
- `communityStartups`: Populate with approved startup name, one-line description, founder, etc. When empty, the site presents intentional 'coming soon' showcase cards, not made-up startups.
- `upcoming`: Hackathons, meetups, expansion announcements.
- `audiences`: Visitor categories.
- `socials`: Add approved official social URLs.

The founder profile is an intentional editorial placeholder in `app/page.tsx` until approved founder information and imagery arrive. Deepak Reddy is shown through a typographic monogram rather than an invented portrait. Product and leaderboard mockups are marked as illustrative previews.

## Design system

- Primary: `#0473C4` (NexStep blue)
- Supporting: `#353430` (graphite)
- Neutral: `#FFFFFF`
- Atmospheric backgrounds and pale blue tints are derived UI surfaces, not additional brand colors.
- Editorial headings: Instrument Serif via CSS Google Fonts with Georgia fallback.
- Interface/body: DM Sans via CSS Google Fonts with sans-serif fallback.

## Scope and interactions

- Cinematic hero with decorative orbit, subtle motion and scroll reveal
- Responsive mobile navigation, in-page links, visible scroll-progress line
- Current programs, reusable milestone grid and featured mentor
- Interactive Technology / Entrepreneurship switcher
- Feature previews, LevelUpLabs illustration, community startup placeholders
- Illustrative leaderboard, future events, California expansion announcement
- Waitlist form with explicit preview mode + optional third-party endpoint
- `/coming-soon` and custom not-found experience
- Open Graph image, favicon, semantic headings and reduced-motion support

**Not included:** actual AI products, matching engines, live rankings, university dashboard, backend, user accounts or a real deployment. These are separate future product scopes.

## Quality checklist before the summit

- [ ] Approve all copy, mentor claims and the 1,000+ community count.
- [ ] Confirm event date/details if you want them displayed.
- [ ] Populate community startups and founder story if approved.
- [ ] Connect waitlist endpoint and validate real submission + consent handling.
- [ ] Publish a real privacy policy for data collection. Current UI includes a short consent notice only.
- [ ] Add official social/contact details and final domain.
- [ ] Generate and test the QR code using the deployed HTTPS homepage URL.
- [ ] Test on physical iPhones and Android devices and a slow network.
