import { z } from "zod";

const postSchema = z.object({
  id: z.string().uuid(),
  title: z.string().nullable(),
  likesCount: z.number().int().nonnegative(),
  dislikesCount: z.number().int().nonnegative(),
  commentsCount: z.number().int().nonnegative(),
  type: z.enum(["image", "video"]),
  contentUrl: z.string().url(),
});

export type PostSchema = z.infer<typeof postSchema>;
