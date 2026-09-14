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

export const collections = { blog };
