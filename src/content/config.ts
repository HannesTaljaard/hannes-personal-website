import { defineCollection, z } from "astro:content";

const compositionCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        year: z.number(),
        category: z.enum(['orchestra', 'solo', 'piano']),
        scoreURL: z.string().url()
    })
});

const performanceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        kind: z.enum(['composition', 'performance']),
        title: z.string(),
        performer: z.array(z.string()),
        performanceDate: z.date(),
        location: z.string()
    })
});

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        imgURL: z.string().url()
    })
});

export const collections = {
    'composition': compositionCollection,
    'performance': performanceCollection,
    'project': projectCollection
}