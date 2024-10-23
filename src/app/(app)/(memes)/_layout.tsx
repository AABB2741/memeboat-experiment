import { Stack } from "expo-router";

export default function MemesLayout() {
  return (
    <Stack>
      <Stack.Screen name="(main)/index" />
      <Stack.Screen name="meme/[meme_id]/index" />
      <Stack.Screen name="user/[user_id]/index" />
    </Stack>
  );
}
