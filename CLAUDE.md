# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page React application for an artist portfolio website (oliwka.art). Frontend-only with no backend or database - all content is static.

## Commands

```bash
npm install         # Install dependencies
npm run dev         # Start dev server (Vite, http://localhost:5173)
npm run build       # Build for production (output: dist/)
npm run preview     # Preview production build locally
```

## Tech Stack

- **React 18** with React Router DOM 7 for routing
- **Vite** as build tool
- **Tailwind CSS** with custom color palette (cream, warm, earth tones) and fonts (Nunito, Cormorant Garamond)
- **Web3Forms** for contact form submission
- **Vercel** for deployment

## Architecture

Entry flow: `index.html` → `src/main.jsx` (BrowserRouter) → `src/App.jsx` (layout + routes)

### Routes
- `/` - Home page with artist bio and 2 featured works
- `/gallery` - Full gallery grid (9 artworks)
- `/contacts` - Contact form using Web3Forms API

### Key Files
- `src/App.jsx` - Main layout with header, navigation, routes, footer
- `src/pages/Home.jsx` - Landing page with artist portrait and bio
- `src/pages/Gallery.jsx` - Grid layout with hover saturation effects
- `src/pages/Contacts.jsx` - Contact form with Web3Forms integration
- `src/hooks/useImagePreloader.js` - Preloads gallery images on mount

### Styling
Custom Tailwind theme in `tailwind.config.js` defines:
- Color palette: `cream`, `warm`, `earth` with shade variants
- Fonts: `sans` (Nunito), `serif` (Cormorant Garamond)
- Custom `.frame` component class in `src/index.css`

### Static Assets
- Gallery images in `public/gallery/`
- PWA manifest at `public/site.webmanifest`
- Cache headers configured for 1-year immutable caching on images
