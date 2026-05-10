# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
bun dev          # start dev server at localhost:3000
bun run build    # production build
bun run start    # run production build
bun run lint     # run ESLint (uses eslint CLI directly, not next lint)
```

There are no tests configured.

## Architecture

**Next.js 16.2.6** with the **App Router** only — no Pages Router. Source lives under `src/`.

- `src/app/` — routes (layouts, pages, route handlers)
- `src/components/` — shared React components
- `src/types/` — TypeScript types (`TWithChildren` etc.)
- `src/utils/` — utility functions
- `public/` — static assets

Path alias `@/*` resolves to `src/*`.

Tailwind CSS v4 via `@tailwindcss/postcss`. React Compiler is enabled (`reactCompiler: true` in `next.config.ts`), so manual `useMemo`/`useCallback` is rarely needed.

## Next.js 16 Breaking Changes

**Always read the relevant guide in `node_modules/next/dist/docs/` before writing code — this version differs significantly from training data.**

Key breaks from v15:

- **Async request APIs** — `cookies()`, `headers()`, `draftMode()`, and `params` in layouts/pages/routes are now fully async. Always `await` them:
  ```ts
  const cookieStore = await cookies()
  const { id } = await params
  ```

- **`middleware.ts` → `proxy.ts`** — file and exported function both renamed. `edge` runtime is not supported in `proxy`; keep `middleware.ts` if you need edge.

- **`next lint` removed** — use `eslint` (already wired in `package.json`). `next build` no longer runs linting.

- **`serverRuntimeConfig`/`publicRuntimeConfig` removed** — use `process.env` directly in Server Components or `NEXT_PUBLIC_` prefix for client-accessible values.

- **`revalidateTag` requires a second argument** — pass a `cacheLife` profile; single-argument form is a TypeScript error.

- **Instant client navigations** — `<Suspense>` alone is not enough. Export `unstable_instant` from routes that must navigate instantly. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`.

- **`experimental.dynamicIO`** renamed to top-level `cacheComponents`.

- **`skipMiddlewareUrlNormalize`** renamed to `skipProxyUrlNormalize`.
