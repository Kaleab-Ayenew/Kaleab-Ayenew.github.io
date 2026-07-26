import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entrySchema = z.object({
  title: z.string(),
  publishDate: z.coerce.date(),
  description: z.string(),
  volume: z.string().optional(),
  draft: z.boolean().default(false),
});

const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: entrySchema,
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: entrySchema,
});

export const collections = { writings, works };
