import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Blog posts: one Markdown file per post in src/content/blog/.
// The schema is checked at build time, so a post with a missing or
// misspelled field fails `astro check` instead of rendering blank.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      excerpt: z.string(),
      // Alt text for the photo. Shown as visible text only in the placeholder
      // box that stands in for a missing photo.
      caption: z.string(),
      // Optional header photo: a path relative to the post file, e.g. ./my-post.jpg.
      // Astro resizes and compresses it at build time.
      image: image().optional(),
    }),
});

// Spanish versions of posts: one Markdown file per post in src/content/blog-es/,
// named exactly like the English post it translates. A file carries only the
// words (title, excerpt, caption, body); the date comes from the English post
// so the two can never disagree, and a missing `image` falls back to the
// English photo. The pattern skips files starting with "_" (the folder's README).
const blogEs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog-es" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      caption: z.string(),
      image: image().optional(),
    }),
});

export const collections = { blog, blogEs };
