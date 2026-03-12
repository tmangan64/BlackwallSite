// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export const collections = {
  knowledge: defineCollection({ type: 'content', schema: baseSchema }),
  articles: defineCollection({
    type: 'content',
    schema: baseSchema.extend({
      bsky: z.string().optional(), // Bluesky post URL
    }),
  }),
  projects: defineCollection({
    type: 'content',
    schema: baseSchema.extend({
      status: z.enum(['active', 'wip', 'complete', 'archived']).default('active'),
      url: z.string().optional(),
      repo: z.string().optional(),   // ← add this line
    }),
  }),
  resources: defineCollection({
    type: 'content',
    schema: baseSchema.extend({
      url: z.string().optional(),
      type: z.string().optional(),
    }),
  }),
};
