import type { ViewProps } from "react-native";
import { MemeAuthor } from "../author";
import { MemeContainer } from "../container";
import { MemeContent } from "../content";
import { MemeGroup } from "../group";
import { MemeInteractions } from "../interactions";
import { MemeReactions } from "../reactions";
import { MemeSources } from "../sources";

interface MemePageProps extends ViewProps {}

/**
 * All `meme` components used together.
 */
export function MemePage(props: MemePageProps) {
  return (
    <MemeContainer {...props}>
      <MemeGroup>
        <MemeAuthor />
      </MemeGroup>

      <MemeContent />

      <MemeGroup>
        <MemeSources />
        <MemeReactions />
        <MemeInteractions />
      </MemeGroup>
    </MemeContainer>
  );
}
