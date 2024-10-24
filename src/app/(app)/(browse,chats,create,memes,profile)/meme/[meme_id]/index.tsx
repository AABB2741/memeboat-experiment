import { useLocalSearchParams } from "expo-router";

import { MemeAuthor } from "./components/meme-author";
import { MemeInteractions } from "./components/meme-interactions";
import { MemeReactions } from "./components/meme-reactions";
import { MemeSources } from "./components/meme-sources";

import { MemeContent } from "./components/meme-content";
import { Container } from "./styles";

type Params = {
  meme_id: string;
};

export default function MemePage() {
  const { meme_id } = useLocalSearchParams<Params>();

  return (
    <Container>
      <MemeAuthor />

      <MemeContent />

      <MemeSources />
      <MemeReactions />
      <MemeInteractions />
    </Container>
  );
}
