import { z } from "zod";

export const userBadgeSchema = z.enum(["🅱️", "🎖️", "🥇", "🥈", "🥉"]);

export type UserBadgeSchema = z.infer<typeof userBadgeSchema>;
