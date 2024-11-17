import { z } from "zod";

export const memeSchema = z.object({
  id: z.string().uuid(),
  baseMemeId: z.string().uuid().nullable(),
  musicId: z.string().uuid().nullable(),
  title: z.string().nullable(),
});

export type MemeSchema = z.infer<typeof memeSchema>;
