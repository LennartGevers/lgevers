import {z} from 'zod';

const ArticleSchema = z.object({
    title: z.string(),
    desc: z.string(),
    tags: z.array(z.string()),
})

export type Article = z.infer<typeof ArticleSchema>;