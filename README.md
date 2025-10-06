## Card App

An example e‑commerce product catalog built with Next.js 15 (App Router), React 19, and Tailwind CSS v4. It renders a product grid, individual product pages with image galleries, a theme toggle (light/dark via class strategy), and simple navigation/footer. A small JSON dataset powers both UI and API routes.

### Tech Stack
- **Framework**: Next.js 15 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS v4
- **Language**: TypeScript
- **Testing**: Jest + Testing Library (jsdom)

---

## Quick Start

### Prerequisites
- Node.js ≥ 18.18.0 (Recommended: 20+)
- npm (comes with Node)

### Install
```bash
npm ci
```

### Development
```bash
npm run dev
```
Then open `http://localhost:3000`.

### Production Build
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

### Test
```bash
npm test
```
Tests run in jsdom without watch mode. There is an existing `coverage/` report in the repo; you can generate fresh coverage by configuring Jest coverage if desired.

---

## Scripts (package.json)
- `dev`: Start Next.js in dev mode with Turbopack.
- `build`: Production build with Turbopack.
- `start`: Start the optimized production server.
- `lint`: Run ESLint.
- `test`: Run Jest once (no watch).

---

## Project Structure

```text
card-app/
  __tests__/                 # Unit tests (components and branches)
  coverage/                  # Existing coverage outputs (html, lcov, json)
  public/
    products/                # Product images used by the gallery/cards
  src/
    app/                     # Next.js App Router
      api/
        products/
          [id]/route.ts      # GET /api/products/[id]
          route.ts           # GET /api/products
      layout.tsx             # Root layout (applied to all routes)
      page.tsx               # Home page (product grid)
      products/
        [id]/page.tsx        # Product details page
    components/
      Footer.tsx             # Site footer
      NavBar.tsx             # Top navigation bar
      ProductCard.tsx        # Single product card
      ProductGallery.tsx     # Image gallery on product page
      ProductGrid.tsx        # Grid listing of products
      ThemeToggle.tsx        # Light/dark theme toggle
    data/
      products.json          # Product dataset consumed by UI and API
    lib/
      cn.ts                  # Class name utility helper
  jest.config.cjs            # Jest configuration
  jest.setup.ts              # Jest test environment setup
  tailwind.config.ts         # Tailwind v4 config (darkMode: "class")
  postcss.config.mjs         # Tailwind/PostCSS plugin config
  next.config.ts             # Next.js configuration
  tsconfig.json              # TypeScript configuration
  eslint.config.mjs          # ESLint config
  package.json               # Scripts and dependencies
  README.md                  # This file
```

---

## Features
- Product grid with responsive layout.
- Product details page with image gallery.
- Theme toggle using Tailwind `dark` class strategy.
- API routes serving product data from `src/data/products.json`.
- Unit tests for key components.

---

## API Routes
- `GET /api/products` → returns the full product list from `products.json`.
- `GET /api/products/[id]` → returns a single product by `id`.

These routes are defined in `src/app/api/products/route.ts` and `src/app/api/products/[id]/route.ts` and are used by the UI pages.

---

## Styling and Theming
- Tailwind v4 with `darkMode: "class"` (configured in `tailwind.config.ts`).
- The `ThemeToggle` component toggles a `dark` class on the root, enabling dark styles.

---

## Testing
Tests are colocated in `__tests__/`. Run them via:
```bash
npm test
```
The project includes existing coverage output under `coverage/` (generated previously). To view HTML coverage locally, open `coverage/lcov-report/index.html` in a browser.

---

## Development Notes
- The codebase targets React 19 and Next.js 15. Ensure your Node.js version is compatible.
- Lint warnings (e.g., unused imports) will surface during `build` and `lint`. Remove unused imports to keep the build clean.

---

## Live Demo
Once deployed, the live app will be available here:
https://card-app-lemon.vercel.app/

## Deployment
### Vercel (recommended)
1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click "New Project" and import the repo.
3. Framework Preset: Next.js (detected automatically).
4. Environment variables: none required for this demo.
5. Build & Output Settings (defaults):
   - Build Command: `npm run build`
   - Install Command: `npm ci`
   - Output: (Next.js default server)
6. Click Deploy. Your app will be available at a `*.vercel.app` URL.

### Any Node Host
```bash
npm ci
npm run build
npm start
```

---

## Author
Developed by **Ajay Kumar Verma**

- LinkedIn: https://www.linkedin.com/in/ajayverma7398

---

## License
MIT — feel free to use this as a starting point for your own projects.
