import { z } from "zod";
import { userBadgeSchema } from "./user-badge";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  avatarUrl: z.string().url(),
  accountLevel: z.number().int().nonnegative(),
  badges: z.array(userBadgeSchema),
});

export type UserSchema = z.infer<typeof userSchema>;
