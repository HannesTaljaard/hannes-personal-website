import { defineCollection } from "astro:content";
import { z } from 'astro/zod';

const compositionCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        year: z.number(),
        category: z.enum(['orchestral', 'chamber-music-2-3', 'chamber-music-4', 'choir', 'vocal', 'solo-instrumental']),
        scoreURL: z.string().optional()
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
        endDate: z.date().nullable().optional(),
        isLongTerm: z.boolean(),
        performance: z.string().nullable().optional(),
        imgURL: z.string(),
        detailsPageURL: z.string().optional()
    })
});

const scholarlyCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        authors: z.string().array(),
        publishedIn: z.string(),
        yearPublished: z.number(),
        doiURL: z.string()
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
    'compositions': compositionCollection,
    'performances': performanceCollection,
    'projects': projectCollection,
    'scholarly': scholarlyCollection,
    'my-thoughts': myThoughtsCollection
}