import { z, defineCollection } from "astro:content";

const catalogs = defineCollection({
  schema: z.object({
    name: z.string(),
    link: z.string().url(),
    autoparts: z.string().array(),
  }),
});

export const collections = { catalogs };
