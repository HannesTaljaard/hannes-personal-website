import { defineCollection, z } from "astro:content";

 const compositionCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        year: z.number(),
        category: z.enum(['orchestra', 'solo']),
    })
 });

 const performances = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(), // TODO
    })
  });

export const collections = {
    'composition': compositionCollection,
    'performance': performances
}