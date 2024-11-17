import { MemeAuthor } from "./author";
import { MemeContainer } from "./container";
import { MemeContent } from "./content";
import { MemeGroup } from "./group";
import { MemeInteractions } from "./interactions";
import { MemePage } from "./page";
import { MemeReactions } from "./reactions";
import { MemeSources } from "./sources";

export const Meme = {
  Container: MemeContainer,
  Group: MemeGroup,
  Author: MemeAuthor,
  Content: MemeContent,
  Interactions: MemeInteractions,
  Reactions: MemeReactions,
  Sources: MemeSources,

  Page: MemePage,
};
