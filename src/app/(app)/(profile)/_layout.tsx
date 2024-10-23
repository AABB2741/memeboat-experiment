import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="user/[user_id]/index" />
    </Stack>
  );
}
