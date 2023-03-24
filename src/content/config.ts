// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': blogCollection,
};