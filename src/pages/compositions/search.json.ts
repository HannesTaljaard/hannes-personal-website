import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

async function getCompositions() {

    const allCompositions: CollectionEntry<'compositions'>[] = await getCollection('compositions');

    // return only necessarry data without the content
    return allCompositions.map((composition) => ({
        slug: composition.slug,
        title: composition.data.title,
        subtitle: composition.data.subtitle,
        year: composition.data.year,
        category: composition.data.year
    }));
}

export async function GET({}) {
    return new Response(JSON.stringify(await getCompositions()), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
}