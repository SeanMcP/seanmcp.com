import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    description: z.string().optional(),
    flags: z.array(z.enum(["DRAFT", "RSS-ONLY"])).optional(),
    foot: z.string().optional(),
    head: z.string().optional(),
    image: z.nullable(z.string()).optional(),
    pubDate: z.string(),
    series: z.string().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string().optional(),
    updatedDate: z.string().optional(),
    verse: z.nullable(z.string()).optional(),
  }),
});

export const collections = {
  articles,
};
