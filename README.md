# Fratelli Remodel — Website

Official website for **Fratelli Remodel**, a Las Vegas-based remodeling company founded by John Juadines and Joe. Built as a high-performance marketing landing page to showcase their work, earn client trust, and drive inbound leads.

**Live Site:** [fratelliremodel.com](https://fratelliremodel.com) *(deployed on Vercel)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Fonts | Google Fonts — Playfair Display + Inter |
| Forms | [Formspree](https://formspree.io/) (ID: `xyklppyl`) |
| Instagram Feed | [Behold.so](https://behold.so/) widget |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
fratelli-remodel/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   └── page.tsx            # Main page (assembles all sections)
├── components/
│   ├── Nav.tsx             # Sticky navigation bar
│   ├── Hero.tsx            # Full-screen hero with CTA
│   ├── TrustBar.tsx        # Quick social proof bar
│   ├── Services.tsx        # Service offerings grid
│   ├── Portfolio.tsx       # Photo portfolio grid (4-row × 3-col)
│   ├── BeforeAfter.tsx     # Before/Progress/After project showcases
│   ├── Testimonials.tsx    # Real Google reviews with badge
│   ├── About.tsx           # Founders story with expandable section
│   ├── Process.tsx         # How the remodel process works
│   ├── HowWeRemodel.tsx    # Differentiators section
│   ├── WhyChooseUs.tsx     # Value proposition
│   ├── WhatGoesWrong.tsx   # Pain points / trust builder
│   ├── EmotionalHook.tsx   # Emotional CTA section
│   ├── TrustSection.tsx    # Additional trust signals
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── CTABanner.tsx       # Bottom call-to-action banner
│   ├── InstagramSection.tsx# Live Instagram feed (Behold.so)
│   ├── Contact.tsx         # Contact form (Formspree)
│   └── Footer.tsx          # Site footer
└── public/
    └── images/             # All project photos
```

---

## Sections Overview

| Section | Purpose |
|---|---|
| **Hero** | Strong first impression, headline, primary CTA |
| **Trust Bar** | Quick credibility signals (years, projects, rating) |
| **Services** | Kitchen, bath, full home, outdoor remodels |
| **Portfolio** | 9-photo grid showcasing completed work |
| **Before & After** | Kristen's Full Home Remodel + Lisa's Remodel |
| **Testimonials** | 3 real Google reviews (Kristen, Lisa, Cindy) + 5.0 badge |
| **About** | John & Joe's story — expandable "Read the Full Story" |
| **Process** | Step-by-step remodel journey |
| **FAQ** | Common homeowner questions answered |
| **Contact** | Lead form → `fratelliremodel@gmail.com` via Formspree |
| **Instagram** | Live feed via Behold.so widget |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Deployment

The site auto-deploys to Vercel on every push to `main`.

```bash
git add .
git commit -m "your message"
git push origin main
```

Vercel picks up the push and deploys within ~1 minute.

---

## Key Integrations

### Formspree (Contact Form)
- Form ID: `xyklppyl`
- Submissions delivered to: `fratelliremodel@gmail.com`
- Spam filtering is currently **disabled** to ensure all leads come through
- Configured in `components/Contact.tsx`

### Behold.so (Instagram Feed)
- Feed ID: `f6ZOr5YFvVc0DaNn5V8m`
- Displays live Instagram posts automatically
- Configured in `components/InstagramSection.tsx`

---

## Photo Notes

All project photos are stored in `public/images/`. HEIC files sourced from iPhone are converted to JPEG using Python Pillow to physically correct EXIF rotation (ensures correct display across all browsers).

**Naming conventions:**
- `portfolio-*.jpg` — Portfolio grid photos
- `before-*.jpg` — Before project photos
- `progress-*.jpg` — In-progress project photos
- `after-*.jpg` / `portfolio-*` — After/completed photos

---

## Contact

**Fratelli Remodel**
Las Vegas, NV
fratelliremodel@gmail.com
