import { z } from "zod";

export const memeContentSchema = z.union([
  z.object({
    type: z.literal("image"),
    imageUrl: z.string().url(),
  }),
  z.object({
    type: z.literal("video"),
    videoUrl: z.string().url(),
  }),
]);

export type MemeContentSchema = z.infer<typeof memeContentSchema>;
