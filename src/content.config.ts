import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CATEGORIES, DEFAULT_CATEGORY, type CategoryId } from "./config";

const categoryIds = Object.keys(CATEGORIES) as [CategoryId, ...CategoryId[]];

const blog = defineCollection({
    // 讀 src/content/blog/ 底下所有 .md / .mdx；檔名以 _ 開頭的（例如 _template.md）會被略過
    loader: glob({ base: "./src/content/blog", pattern: "**/[^_]*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        description: z.string().default(""),
        published: z.coerce.date(),
        updated: z.coerce.date().optional(),
        // 只能填 src/config.ts 的 CATEGORIES 裡有的 key；沒寫就是 misc
        category: z.enum(categoryIds).default(DEFAULT_CATEGORY),
        tags: z.array(z.string()).default([]),
        // draft: true 的文章在 npm run dev 看得到，正式 build 不會出現
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
