# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`adrianfurlan.com` — Adrián Furlan's personal music portfolio (Astro 7, TypeScript 6, Node >= 22.12.0, static output). The visual system is "Soundings", documented in `DESIGN.md`; the Claude Design export it was built from lives in the gitignored `claude-design/` folder (reference only, never edit it).

Current state: the About page (`src/pages/about.astro`) is built for desktop and mobile from artboards `1f` and `1i`. The homepage (`src/pages/index.astro`) is built from artboards `2a`/`2b`: release hero plus a four-track list with a working per-row audio player (`src/components/TrackList.astro` holds the script, `TrackRow.astro` one row). Track data lives in `src/data/tracks.ts`; audio files are expected at `public/audio/<slug>.mp3` and none exist yet. The hero cover is a caption box until a large image is supplied (`src/assets/coverart.jpg` is only 56px, used for row thumbnails). There is no persistent player bar yet; audio stops on navigation. The Contact page (`src/pages/contact.astro`) is built for both widths with a visual-only form. The blog list page (`src/pages/blog/index.astro`) reads posts from the content collection and `src/pages/blog/[slug].astro` renders each post; the post's "N days ago" line is computed in the browser by a small script while the HTML carries the absolute date. Archivo Narrow is loaded only for the post page's "All posts" link. `README.md` still documents the Astro starter template, not this site.

## Commands

```sh
npm run dev           # dev server at localhost:4321
npm run build         # static build to ./dist/
npm run preview       # serve the built output
npm run format        # prettier --write .
npm run format:check  # prettier --check .
npm run lint:css      # stylelint src/**/*.{css,astro,html}
npm run lint:css:fix  # stylelint --fix
```

Two tools have no `package.json` script and must be run directly:

```sh
npx astro check       # TypeScript + Astro diagnostics (via @astrojs/check)
npx eslint src        # scope to src/ — see the ESLint note below
```

There is no test suite or test runner configured.

## Repo state — known baseline failures

Check these before assuming a diagnostic is something you introduced:

- `npm run lint:css`, `npx astro check`, and `npm run format:check` all pass clean. Keep them that way.
- **`npx eslint src` fails on TypeScript in `.astro` frontmatter** — `Parsing error: The keyword 'interface' is reserved` in `Layout.astro` and `SiteHeader.astro`. `eslint.config.js` is only `eslint-plugin-astro`'s recommended rules with no TypeScript parser. The documented fix is `npm i -D @typescript-eslint/parser` plus `parserOptions.parser` in the config; the owner has chosen to ignore ESLint for now, so don't drop the `Props` interfaces to appease it.
- **`npx eslint .` additionally fails** with `Parsing error: Unexpected token module` on the generated `.astro/content.d.ts`, because the config has no `ignores` list. Scope runs to `src/`.

## Tooling notes

- **Stylelint** uses `postcss-html` as custom syntax for `.astro`/`.html`, so it lints the component-scoped `<style>` blocks, not just `.css` files. On top of `stylelint-config-standard` it enforces: no named colors, no `!important`, **zero ID selectors**, max nesting depth 3, and no unknown animations.
- **Prettier** is stock (2-space, double quotes) plus `prettier-plugin-astro`. `.prettierignore` duplicates `.gitignore` entries (`dist/`, `.astro/`) on purpose — the CLI reads `.gitignore` but editor integrations read only `.prettierignore`.
- **`tsconfig.json`** extends `astro/tsconfigs/strict` and includes the generated `.astro/types.d.ts`. If types vanish, regenerate by running `astro dev`, `astro build`, or `astro check`.
- **`.gitattributes`** sets `package-lock.json -diff`, so git reports it as "Binary files differ". The file is still fully committed and versioned; only its diff display changes.

## Architecture

Stock static Astro with no integrations and no adapter — `astro.config.mjs` is an empty `defineConfig({})`, so everything builds to static HTML in `dist/`.

- `src/pages/` — file-based routing; each `.astro` (and `.md`) file becomes a route.
- `src/layouts/Layout.astro` — the document shell (`<html>`, `<head>`, `html/body` reset) exposing a `<slot />`. It is the only place the `<head>` is defined, so keep new pages wrapping themselves in it rather than hand-writing their own document.
- `src/components/` — components carrying their own scoped `<style>` blocks.
- `src/styles/tokens.css` — the Soundings design tokens as CSS custom properties, same names as the export's `_ds/.../tokens/*.css`. `src/styles/global.css` is the base reset. Both are imported once in `Layout.astro`; components reference `var(--…)` and never repeat hex values.
- `src/components/SiteHeader.astro` / `SiteFooter.astro` — the shared chrome. The header takes `current` (`"home" | "about" | "blog" | "contact"`) and owns the mobile hamburger menu (a small `<script>` toggles `.is-open` and `aria-expanded`).
- Responsive rule: one breakpoint, `@media (width < 720px)` (range syntax, required by Stylelint), placed at the end of each component's `<style>`. Desktop is the default; the media query overrides only what changes on phones.
- `src/content.config.ts` + `src/content/blog/*.md` — the blog posts as an Astro content collection (front matter: `title`, `date`, `excerpt`, `caption`). Add a post by adding a file. `src/components/PostCard.astro` renders one grid card. Shared blog helpers (newest-first sort, date formatting, post URLs) live in `src/utils/blog.ts`; import them rather than re-declaring. The blog's pagination row is decorative until there are enough posts to page.
- `src/assets/` — images imported in frontmatter and referenced as `{img.src}` so Astro processes them (currently empty). `public/` is served verbatim.

## Commits

The parent `../CLAUDE.md` requires invoking the `commit-message` skill for any commit. The established message format in this repo's history is an emoji conventional commit — `✨ feat:`, `🐛 fix:`, `🔨 refactor:`, `📝 docs:`, `🎨 style:`, `✅ test:`, `⚡ perf:` — with the body explaining _why_.
