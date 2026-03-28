# KCK Production

A high-end event production website built with React, Vite, TypeScript, and Tailwind CSS. Migrated from Lovable to Replit.

## Architecture

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5 with `@vitejs/plugin-react-swc`
- **Styling**: Tailwind CSS v3 with custom design tokens (gold/dark theme)
- **Routing**: React Router DOM v6
- **State/Data**: TanStack React Query
- **UI Components**: Radix UI primitives + shadcn/ui patterns
- **Animations**: Framer Motion

## Structure

```
src/
  App.tsx          # Root component with routing + providers
  main.tsx         # Entry point
  index.css        # Global styles, Tailwind layers, design tokens
  pages/           # Page components (Index, NotFound)
  components/      # Reusable UI components
  hooks/           # Custom React hooks
  lib/             # Utilities
  assets/          # Static assets
```

## Development

```bash
npm run dev      # Start dev server on port 5000
npm run build    # Production build
npm run preview  # Preview production build
```

## Replit Notes

- Dev server runs on port 5000 (required for Replit webview)
- `allowedHosts: true` in Vite config for Replit proxy compatibility
- Removed `lovable-tagger` dev dependency (Lovable-specific)
- Fixed nested `@apply` inside `@media` rules in `index.css` (unsupported by PostCSS/Tailwind v3)
- Mobile glassmorphism overrides moved to top-level `@media` blocks
