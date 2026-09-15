// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Two languages: English pages live at /, Spanish ones at /es/. Astro reads
  // the language from the address and exposes it as Astro.currentLocale; the
  // files under src/pages/es/ are thin wrappers around the English pages.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
});
