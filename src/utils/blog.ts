import type { CollectionEntry } from "astro:content";
import { dateLocale, localePath, type Locale } from "../i18n";

type Post = CollectionEntry<"blog">;
type Twin = CollectionEntry<"blogEs">;

/** Sort comparator: newest post first. */
export const byNewest = (a: Post, b: Post) =>
  b.data.date.valueOf() - a.data.date.valueOf();

/**
 * "September 9, 2026" in English, "9 de septiembre, 2026" in Spanish. UTC so
 * a date-only value never shifts by a day. The Spanish form is assembled by
 * hand because the browser's own long format says "9 de septiembre de 2026".
 */
export const formatDate = (date: Date, locale: Locale) => {
  if (locale === "es") {
    const dayMonth = date.toLocaleDateString(dateLocale(locale), {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
    });
    return `${dayMonth}, ${date.getUTCFullYear()}`;
  }
  return date.toLocaleDateString(dateLocale(locale), {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

/** "2026-09-09", the machine-readable form for <time datetime>. */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

/** Address of a post's page in the given language: /blog/id or /en/blog/id. */
export const postHref = (id: string, locale: Locale) =>
  localePath(locale, `/blog/${id}`);

/** Address of one page of the blog list: /blog for page 1, then /blog/2, /blog/3 … */
export const blogPageHref = (n: number, locale: Locale) =>
  localePath(locale, n === 1 ? "/blog" : `/blog/${n}`);

/**
 * The words a post shows: the Spanish twin's when one exists, otherwise the
 * English post's. The date is not included on purpose — it always comes from
 * the English post.
 */
export const localisedPost = (post: Post, twin?: Twin) => ({
  title: (twin ?? post).data.title,
  excerpt: (twin ?? post).data.excerpt,
  caption: (twin ?? post).data.caption,
  image: twin?.data.image ?? post.data.image,
});
