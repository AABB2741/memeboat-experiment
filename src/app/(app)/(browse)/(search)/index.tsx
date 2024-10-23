import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SearchPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pesquisar memes</Text>
      <Button
        title="Meme encontrado: 2"
        onPress={() => router.push("/(app)/(browse)/meme/2")}
      />
    </View>
  );
}
