import { defineCollection, z } from "astro:content";

const compositionCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        year: z.number(),
        category: z.enum(['orchestral', 'chamber-music-2-3', 'chamber-music-4', 'choir', 'vocal', 'solo-instrumental']),
        scoreURL: z.string().url()
    })
});

const performanceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        kind: z.enum(['composition', 'performance', 'composition-performance']),
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
        isLongTerm: z.boolean(),
        performance: z.string(),
        imgURL: z.string().url()
    })
});

const scholarlyCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        authors: z.string().array(),
        publishedIn: z.string(),
        yearPublished: z.number(),
        doiURL: z.string().url()
    })
});

const myThoughtsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        datePublished: z.date(),
    })
});

export const collections = {
    'composition': compositionCollection,
    'performance': performanceCollection,
    'project': projectCollection,
    'scholarly': scholarlyCollection,
    'mythoughts': myThoughtsCollection
}