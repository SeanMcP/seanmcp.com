import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    description: z.string(),
    flags: z.array(z.enum(["DRAFT", "RSS-ONLY"])).optional(),
    foot: z.string().optional(),
    head: z.string().optional(),
    image: z.nullable(z.string()).optional(),
    pubDate: z.string(),
    series: z.string().optional(),
    tags: z.array(z.string()),
    title: z.string(),
    verse: z.nullable(z.string()).optional(),
  }),
});

const gardens = defineCollection({
  schema: z.object({
    description: z.string(),
    head: z.string().optional(),
    title: z.string(),
    tendedDates: z.array(z.string()),
    verse: z.string().optional(),
  }),
});

const notes = defineCollection({
  schema: z.object({
    edited: z.boolean().optional(),
    pubDate: z.string(),
  }),
});

export const collections = {
  articles,
  gardens,
  notes,
};
