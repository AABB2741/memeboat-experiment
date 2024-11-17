import { useLocalSearchParams } from "expo-router";

import { Meme } from "@/components/meme";

type Params = {
  meme_id: string;
};

export default function MemePage() {
  const { meme_id } = useLocalSearchParams<Params>();

  return <Meme.Page />;
}
