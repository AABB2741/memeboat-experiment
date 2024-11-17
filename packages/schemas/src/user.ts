import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  avatarUrl: z.string().url(),
  accountLevel: z.number().int().nonnegative(),
  badges: z.array(z.string()),
});

export type UserSchema = z.infer<typeof userSchema>;
