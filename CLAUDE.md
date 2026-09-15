# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`adrianfurlan.com` — Adrián Furlan's personal music portfolio (Astro 7, TypeScript 6, Node >= 22.12.0, static output). The visual system is "Soundings", documented in `DESIGN.md`; the Claude Design export it was built from lives in the gitignored `claude-design/` folder (reference only, never edit it).

Current state: the About page (`src/pages/about.astro`) is built for desktop and mobile from artboards `1f` and `1i`. The homepage (`src/pages/index.astro`) is built from artboards `2a`/`2b`: release hero plus a four-track list with a working per-row audio player (`src/components/TrackList.astro` lays out the list, `TrackRow.astro` one row; the player script itself lives in `PlayerBar.astro`). Track data lives in `src/data/tracks.ts`; audio files are expected at `public/audio/<slug>.mp3` and none exist yet. Streaming platforms live in `release.streaming` in that same file (Spotify, Apple Music, YouTube Music, Amazon Music, and Bandcamp with a bilingual `note` saying it is where to buy the EP directly; each address a `#` placeholder until the real one is pasted in, plus an `icon` key): `src/components/StreamingLinks.astro` renders them as a "Listen on" section of five hairline cards below the track list (one compact full-width row per platform on phones), with the mark drawn by `PlatformIcon.astro` and each card's mark in the platform's brand colour from `src/data/platforms.ts` (the border rests in Deep Water and takes the brand colour on hover; on phones it is in the brand colour from the start); a platform whose address is the empty string is skipped, and the section is left out when every address is empty. The hero cover is a caption box until a large image is supplied (`src/assets/coverart.jpg` is only 56px, used for row thumbnails). `src/components/PlayerBar.astro`, rendered once in `Layout.astro` with `transition:persist`, is the persistent player: it owns the site's single `<audio>` and paints the track rows; it sits in the page flow directly above the footer at every width (the owner's choice over DESIGN.md's viewport-docked bar), which `global.css` arranges with `footer { order: 1 }`; rows carry the track as `data-*` attributes and no audio of their own. `Layout.astro` uses Astro's `<ClientRouter fallback="swap" />` so navigation is client-side (Astro's default short cross-fade, chosen by the owner over DESIGN.md's "instant") and the bar (and audio) survives page changes. Consequence for any page `<script>`: it runs once per session, so bind DOM work inside `document.addEventListener("astro:page-load", …)` as the header, post page, and player do. The Contact page (`src/pages/contact.astro`) posts to Formspree: the form's address lives in `src/data/contact.ts` (paste the form ID there; reCAPTCHA must be off in the Formspree form settings or JavaScript submissions are rejected), a `_gotcha` honeypot hidden with `display: none` catches bots that post straight to Formspree (the script empties it before sending, because browser autofill was filling it and real messages landed in Formspree's spam folder), and the page's `<script>` checks the three fields, sends with `fetch` + `Accept: application/json`, and moves the form's `data-state` through `idle → sending → sent | error`, revealing the pre-rendered thank-you block or error line. All the wording is in `ui.ts` and rendered into the HTML, so the script needs no strings. The blog list page (`src/pages/blog/[...page].astro`) shows five posts per page with Astro's `paginate()` — the newest one large plus four cards on `/blog`, five cards on `/blog/2`, `/blog/3`… — and `src/pages/blog/[slug].astro` renders each post; the post's "N days ago" line is computed in the browser by a small script while the HTML carries the absolute date. Archivo Narrow is loaded only for the post page's "All posts" link. The site is bilingual: Spanish at `/`, English at `/en/…`, switched by the header's ES/EN links — see the Languages bullet under Architecture. `README.md` still documents the Astro starter template, not this site.

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

Stock static Astro with no integrations and no adapter — `astro.config.mjs` only declares the two languages (`i18n: { defaultLocale: "en", locales: ["en", "es"] }`), so everything builds to static HTML in `dist/`.

- `src/pages/` — file-based routing; each `.astro` (and `.md`) file becomes a route.
- `src/layouts/Layout.astro` — the document shell (`<html>`, `<head>`, `html/body` reset) exposing a `<slot />`. It is the only place the `<head>` is defined, so keep new pages wrapping themselves in it rather than hand-writing their own document.
- `src/components/` — components carrying their own scoped `<style>` blocks.
- `src/styles/tokens.css` — the Soundings design tokens as CSS custom properties, same names as the export's `_ds/.../tokens/*.css`. `src/styles/global.css` is the base reset. Both are imported once in `Layout.astro`; components reference `var(--…)` and never repeat hex values.
- `src/components/SiteHeader.astro` / `SiteFooter.astro` — the shared chrome. The header takes `current` (`"home" | "about" | "blog" | "contact"`) and owns the mobile hamburger menu (a small `<script>` toggles `.is-open` and `aria-expanded`) and the EN/ES toggle: two real links to the same page in the other language, built from `pathWithoutLocale(Astro.url.pathname)` and `localePath`.
- Responsive rule: one breakpoint, `@media (width < 720px)` (range syntax, required by Stylelint), placed at the end of each component's `<style>`. Desktop is the default; the media query overrides only what changes on phones.
- `src/content.config.ts` + `src/content/blog/*.md` — the blog posts as an Astro content collection (front matter: `title`, `date`, `excerpt`, `caption`, optional `image`). Add a post by adding a file. `image` is a path relative to the post (`./my-post.jpg`), processed by Astro's `<Image>`; `caption` is its alt text and is only visible in the placeholder box when there is no photo. Post images sit next to their `.md` in `src/content/blog/` and are committed, so keep them under ~1 MB. `src/components/PostCard.astro` renders one grid card. Shared blog helpers (newest-first sort, date formatting, post URLs) live in `src/utils/blog.ts`; import them rather than re-declaring. The pagination row at the bottom of the list is real: `blogPageHref(n, locale)` builds the page addresses, the controls show up to five numbers around the current page (three on phones), the arrows lose their `href` and gain `aria-disabled` on the first/last page, and the whole row is hidden when there is a single page. Spanish posts are a second collection, `blogEs`, in `src/content/blog-es/`: same filename as the English post, front matter `title`/`excerpt`/`caption` (+ optional `image`, falling back to the English photo), no `date` (the English post's is used); its glob pattern `**/[^_]*.md` skips the folder's `_README.md`. The Spanish blog lists every English post and swaps in the twin's words where one exists (`localisedPost` in `src/utils/blog.ts`), otherwise it shows the English text with a "not translated yet" note on the post page. `formatDate` and `postHref` take the locale.
- `src/assets/` — images imported in frontmatter and referenced as `{img.src}` so Astro processes them (currently empty). `public/` is served verbatim.
- Languages — Spanish at `/`, English at `/en/…` with the same page names (Spanish became the default in September 2026; the shared page files under `src/pages/` were written English-first, hence the `blog` / `blogEs` collection names). `astro.config.mjs` declares both locales, so `Astro.currentLocale` follows the address. All interface text lives in `src/i18n/ui.ts`: one object per language under identical keys, `es` typed as the shape of `en`, so a missing Spanish string fails `npx astro check`. To add text, add it to both sides and print `t.section.key` (`const t = ui[localeOf(Astro)]`). `src/i18n/index.ts` holds the helpers: `localeOf(Astro)` (the page's language), `localePath(locale, "/about")` for every internal link, `pathWithoutLocale` for the toggle, `dateLocale`. `src/i18n/player.ts` holds only the player's three labels because `PlayerBar.astro`'s client `<script>` imports it — never import `ui.ts` from a client script, it would ship every paragraph to the browser. The pages in `src/pages/en/` are thin wrappers that import the shared page as a component (`en/blog/[slug].astro` and `en/blog/[...page].astro` also import and re-export their `getStaticPaths`); the shared page renders in English because the address starts with `/en/`. The toggle's order follows the `locales` array in `src/i18n/index.ts` (ES first). Sentences in `src/data/tracks.ts` are `{ en, es }` pairs. The post page's "N days ago" comes from `Intl.RelativeTimeFormat` with the document's `lang`.

## Commits

The parent `../CLAUDE.md` requires invoking the `commit-message` skill for any commit. The established message format in this repo's history is an emoji conventional commit — `✨ feat:`, `🐛 fix:`, `🔨 refactor:`, `📝 docs:`, `🎨 style:`, `✅ test:`, `⚡ perf:` — with the body explaining _why_.
