// Language helpers. Spanish is the default and lives at "/", English at "/en/".
// Nothing here imports the dictionary, so client scripts can import this file
// without shipping every string on the site to the browser.

export type Locale = "en" | "es";

// Order is the order of the header toggle.
export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

/** A piece of text in both languages, e.g. { en: "Cover", es: "Portada" }. */
export type Localised = Record<Locale, string>;

/**
 * The language of the page being rendered, from its address: anything under
 * /en/ is English, everything else Spanish. Pass the Astro global.
 */
export const localeOf = (astro: {
  currentLocale: string | undefined;
}): Locale => (astro.currentLocale === "en" ? "en" : "es");

/**
 * Prefix a site path for a language: "/about" stays "/about" in Spanish and
 * becomes "/en/about" in English; the home page becomes "/en/".
 */
export const localePath = (locale: Locale, path: string) => {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}/` : `/${locale}${path}`;
};

/**
 * The language-free path of a page, for linking to the same page in the other
 * language: "/en/about/" and "/en/about" both give "/about", "/en/" gives "/".
 */
export const pathWithoutLocale = (pathname: string) => {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (trimmed === `/${locale}`) return "/";
    if (trimmed.startsWith(`/${locale}/`))
      return trimmed.slice(locale.length + 1);
  }
  return trimmed;
};

/** The locale code the browser's date formatting expects. */
export const dateLocale = (locale: Locale) =>
  locale === "es" ? "es-ES" : "en-US";
