import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"blog">;

/** Sort comparator: newest post first. */
export const byNewest = (a: Post, b: Post) =>
  b.data.date.valueOf() - a.data.date.valueOf();

/** "September 9, 2026". UTC so a date-only value never shifts by a day. */
export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

/** "2026-09-09", the machine-readable form for <time datetime>. */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

/** Address of a post's page. */
export const postHref = (id: string) => `/blog/${id}`;
