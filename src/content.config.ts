// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

import { z } from 'astro/zod'
// 2. Define a schema for each collection you'd like to validate.
const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created_at: z.union([z.string(), z.date()]),
    tags: z.array(z.string()).optional(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
  }),
});

const jugements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/jugements" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created_at: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
  }),
});

const newsletters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/newsletters" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created_at: z.string().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/books" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
})
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts,
  jugements,
  books,
  newsletters
};