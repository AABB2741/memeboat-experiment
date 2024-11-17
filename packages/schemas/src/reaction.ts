import { z } from "zod";

export const reactionSchema = z.enum(["like", "dislike"]);

export type ReactionSchema = z.infer<typeof reactionSchema>;
