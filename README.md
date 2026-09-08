# Synertrix — Modular React/Vite Website

The old monolithic HTML structure has been replaced with React modules.

## Structure
- `index.html` — Vite shell only; no page content lives here.
- `src/main.jsx` — application/router/layout entry.
- `src/pages/` — page-level modules can be split further as needed.
- `src/styles.css` and `src/fonts.css` — shared styling.
- `public/assets/` — Synertrix and technology logos.
- `vercel.json` — SPA rewrite so direct page URLs work on Vercel.

## Routes
- `/` — full scrollable homepage, composed from all modules.
- `/about`
- `/services`
- `/process`
- `/industries`
- `/platforms`
- `/contact`

The homepage remains fully scrollable and contains all sections. Navigation tabs open the corresponding modular page, which is also independently scrollable.

## Run
`npm install`
`npm run dev`

## Deploy
Push the project to GitHub and import it into Vercel. Vercel detects Vite automatically.
