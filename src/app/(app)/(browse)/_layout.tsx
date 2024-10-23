import { Stack } from "expo-router";

export default function BrowseLayout() {
  return (
    <Stack>
      <Stack.Screen name="(search)/index" />
      <Stack.Screen name="meme/[meme_id]/index" />
      <Stack.Screen name="user/[user_id]/index" />
    </Stack>
  );
}
