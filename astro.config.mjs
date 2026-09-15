// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Two languages: Spanish pages live at /, English ones at /en/. Astro reads
  // the language from the address and exposes it as Astro.currentLocale; the
  // files under src/pages/en/ are thin wrappers around the shared pages.
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  // Spanish used to live at /es/ (until September 2026). Keep those addresses
  // working: each becomes a tiny page that forwards to the new one.
  redirects: {
    "/es": "/",
    "/es/about": "/about",
    "/es/contact": "/contact",
    "/es/blog/[slug]": "/blog/[slug]",
    "/es/blog/[...page]": "/blog/[...page]",
  },
});
