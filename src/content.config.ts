import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Blog posts: one Markdown file per post in src/content/blog/.
// The schema is checked at build time, so a post with a missing or
// misspelled field fails `astro check` instead of rendering blank.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    // Placeholder image caption, shown in a pale box until real photos exist.
    caption: z.string(),
  }),
});

export const collections = { blog };
