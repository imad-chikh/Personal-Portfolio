# Assistant Instructions & Project Guidelines

Purpose
- This file documents how I (your AI assistant) should help you build and maintain this Next.js portfolio project.
- It contains a recommended folder structure, coding conventions, developer commands, and guidelines for changes.

How to use this file
- Read the Folder Structure section to reorganize the project if you want to follow the recommended layout.
- Ask the assistant to apply changes by referencing filenames or steps from this file (example prompts are provided below).

Project goals
- Small, composable, and testable components.
- Clear separation of concerns: UI components, data layer, styling, assets, and page routing.
- Fast, accessible, and SEO-friendly static-first portfolio pages with optional dynamic data.

Recommended folder structure
```
/app                    # Next.js App Router pages and layout (Next 13+ app dir)
  /(marketing)          # Primary marketing/public pages (home, about, contact)
    layout.tsx
    page.tsx
  /projects             # Project detail + listing pages
    [slug]/page.tsx
  /blog                 # Optional blog routes (MDX or dynamic)
  globals.css
  head.tsx              # shared head/metadata utilities

/components             # Reusable UI components (small & focused)
  /ui                   # low-level primitives (Button, Icon, Link)
  /layout               # Header, Footer, Container components
  /project              # ProjectCard, ProjectGrid

/lib                    # Data fetching, helpers, API clients
  api.ts                # fetch wrappers, endpoints
  cms.ts                # CMS integrations (optional)

/styles                 # Tailwind config + design tokens if needed
  tailwind.css          # Tailwind directives (imported by app/globals.css)

/public                 # static assets (images, icons, favicons)

/scripts                # build & utility scripts (optional)

/types                  # shared TypeScript types and interfaces

/tests                  # unit / integration tests

package.json
tsconfig.json
next.config.ts
README.md
ASSISTANT_INSTRUCTIONS.md
```

Using a `src/` folder (optional)
- If you prefer keeping application source under `src/`, place the main folders inside it:
```
src/
  app/
  components/
  lib/
  styles/
  types/
```
- Using `src/` is mostly organizational — Next.js and TypeScript work the same. I recommend `src/` if you like separating config and tooling files from your source code.

Why this structure
- `app/` holds route-level pieces with layout composition and streaming support.
- `components/` is broken into small, focused folders so components can be discovered and tested independently.
- `lib/` contains pure JS/TS business logic and data layers that are easily mockable for tests.
- `public/` stores image assets so `next/image` can reference them by path.

Conventions and guidelines
- Files & naming
  - Use `kebab-case` for files and folders, `PascalCase` for React components and types.
  - Page routes inside `app/` follow Next's folder routing (e.g., `app/projects/[slug]/page.tsx`).

- Components
  - Keep components small (single responsibility). One UI primitive per file.
  - Export the component as default and named types if needed.

- Styling
  - Tailwind CSS as the primary styling system. Place global imports in `app/globals.css`.
  - For component-scoped styles, use utility classes or `clsx` for conditional classes.

- Types & Safety
  - Keep shared types in `/types`. Use `zod` or `io-ts` for runtime validations if fetching external data.

- Data fetching
  - Prefer static generation (SSG) for portfolio pages. Use `generateStaticParams` / `getStaticPaths` equivalents in app-router.
  - For dynamic data (CMS), cache responses and use incremental static regeneration (ISR) or revalidate options.

- Images
  - Store local images in `/public/images/*` and reference with `/images/...`.
  - Optimize with `next/image` and `priority` for hero images.

- Accessibility & SEO
  - Use semantic HTML and accessible components.
  - Add structured metadata in `app/head.tsx` or per-route `metadata` exports.

- Performance
  - Keep bundle sizes small: lazy-load non-critical components and use dynamic imports for large libraries.

- Testing & CI
  - Add unit tests for layout and core components using `vitest` or `jest`.
  - Add a simple GitHub Actions workflow to run lint, typecheck, and tests on PRs.

- Git workflow
  - Branch from `main` for features: `feature/<short-description>`.
  - Use small focused commits and clear messages.

Developer commands
```bash
# install deps (if needed)
npm install

# run dev server
npm run dev

# lint (update scripts in package.json if desired)
npm run lint

# build production
npm run build

# run tests (if configured)
npm test
```

Example component template (TypeScript + Tailwind)
```tsx
// components/ui/Button.tsx
import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = 'rounded-md px-4 py-2 text-sm font-medium'
  const styles = variant === 'primary' ? 'bg-black text-white' : 'bg-transparent border'
  return <button className={`${base} ${styles} ${className}`} {...props} />
}
```

How I (the assistant) can help you next
- Create the folder structure scaffold (I can create folders/files and initial templates).
- Add Tailwind and ESLint improvements and update `package.json` scripts.
- Scaffold a `Project` feature (data model, listing, detail pages, component tests).

How to ask the assistant (examples)
- "Create the folder scaffold and move current files into the recommended structure."
- "Add a `ProjectCard` component and a `projects` listing page with sample data." 
- "Run the dev server and show any build errors." 

Notes
- If you want me to actually move files and scaffold directories, say so and I will apply the changes.

---

Generated: Assistant instructions for this portfolio project.
