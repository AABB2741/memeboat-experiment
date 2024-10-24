import type { ViewProps } from "react-native";
import { MemeAuthor, type MemeAuthorProps } from "../author";
import { MemeContainer } from "../container";
import { MemeContent, type MemeContentProps } from "../content";
import { MemeGroup } from "../group";
import { MemeInteractions } from "../interactions";
import { MemeReactions, type MemeReactionsProps } from "../reactions";
import { MemeSources, type MemeSourcesProps } from "../sources";

interface MemePageProps extends ViewProps {
  author: MemeAuthorProps;
  content: MemeContentProps;
  sources: MemeSourcesProps;
  reactions: MemeReactionsProps;
}

/**
 * All `meme` components used together.
 */
export function MemePage({
  author,
  content,
  sources,
  reactions,
  ...rest
}: MemePageProps) {
  return (
    <MemeContainer {...rest}>
      <MemeGroup>
        <MemeAuthor {...author} />
      </MemeGroup>

      <MemeContent {...content} />

      <MemeGroup>
        <MemeSources {...sources} />
        <MemeReactions {...reactions} />
        <MemeInteractions />
      </MemeGroup>
    </MemeContainer>
  );
}
