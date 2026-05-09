# Premium Dental Doctor Portfolio (Next.js 14)

High-converting, trust-first dental portfolio website template for Indian clinics.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Swap doctor client in under 10 minutes

1. Edit `config/doctor.ts`
2. Replace all values (name, credentials, services, contact, testimonials, FAQ, SEO, etc.)

All doctor-specific content is sourced from this single config file.

## Swap photos

Replace files inside:

- `public/doctor/`
- `public/clinic/`

Filenames must match exactly.

## Deploy on Vercel

1. Push repository to GitHub
2. Import project in Vercel
3. Vercel auto-detects Next.js and deploys automatically

This template already includes static export settings in `next.config.js`.

## Update Google Maps

Edit `mapEmbedUrl` in `config/doctor.ts`.

## Update WhatsApp number

Edit `whatsapp` in `config/doctor.ts` using:

- country code + number
- no `+`
- no spaces

Example: `919810000000`

## Structure overview

```text
app/                 Routes (Home, About, Services, Gallery, Contact, FAQ)
components/          Reusable UI + section components
config/doctor.ts     Single source of truth for all doctor content
public/doctor/       Doctor photos only
public/clinic/       Clinic photos only
```
