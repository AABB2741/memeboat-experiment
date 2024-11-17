import { Header } from "@/components/header";
import { Stack } from "expo-router";

export default function MemesLayout() {
  return (
    <Stack
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name="(trending)/index"
        options={{
          title: "Memes em alta",
        }}
      />
    </Stack>
  );
}
