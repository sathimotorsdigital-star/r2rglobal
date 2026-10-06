# R2R Global website

React + Vite + React Router + Tailwind CSS + Lucide + Framer Motion.

## Run

```bash
npm install
npm run dev      # development
npm run build    # production build into dist/
npm run preview  # preview the build
```

## Where to edit

- Contact numbers, address, WhatsApp text, map query: `src/data/site.js`
- Services / solutions / industries / FAQ / process: `src/data/*.js`
- Projects: `src/data/projects.js`. Put photos in `public/projects/` and set `image: '/projects/name.jpg'`.
- Logo: `src/components/Logo.jsx` currently holds a placeholder mark. Swap in the official logo file.
- Service detail pages: every service and solution has a page at `/services/<slug>` (for example `/services/pcb-design`, `/services/smps-charger-circuit`).

## Notes

- The Google Map uses the keyless embed URL built from the address in `site.js`.
- When deploying, configure the host to fall back to `index.html` for unknown paths (single-page app).
