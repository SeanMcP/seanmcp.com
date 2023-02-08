import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    description: z.string(),
    draft: z.boolean().optional(),
    image: z.nullable(z.string()).optional(),
    layout: z.string(), // Might not need this after the switch
    pubDate: z.date(),
    tags: z.array(z.string()),
    title: z.string(),
    verse: z.nullable(z.string()).optional(),
  }),
});

export const collections = {
  articles,
};
