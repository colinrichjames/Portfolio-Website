# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm start        # Start production server
```

## Architecture

This is a Next.js 16 portfolio website using the App Router, React 19, and Tailwind CSS 4. It was initially generated with v0.app and auto-syncs with Vercel deployments.

### Key Structure

- **app/page.tsx**: Single-page layout composing five main sections (HeroSection, AboutSection, ProjectPortfolio, RoadJourney, ContactSection)
- **components/**: Section components and supporting UI elements
- **components/ui/**: shadcn/ui components (new-york style, configured via components.json)
- **lib/utils.ts**: `cn()` utility for Tailwind class merging

### UI/Styling

- **shadcn/ui** with new-york style variant and Lucide icons
- **Tailwind CSS 4** with CSS variables for theming
- **Framer Motion** for animations throughout sections
- Georgia Tech color scheme (Tech Gold #B3A369, Navy Blue #003057) defined in app/globals.css using oklch
- Dark mode enabled by default (`className="dark"` on html element)

### Component Patterns

- Client components use `"use client"` directive (required for Framer Motion animations)
- Section components follow consistent structure: motion-animated header, content with viewport-triggered animations
- Path alias `@/` maps to project root (e.g., `@/components`, `@/lib`)
