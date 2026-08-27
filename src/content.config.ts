import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = ['Medicine', 'Cocktails', 'Life'] as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.coerce.string()).default([]),
    categories: z.array(z.enum(CATEGORIES)).min(1),
    original_url: z.string().optional(),
    author: z.string().default('Old Fashioned Doctor'),
    description: z.string(),
    hero: z.string().optional(),
  }),
});

export const collections = { posts };
