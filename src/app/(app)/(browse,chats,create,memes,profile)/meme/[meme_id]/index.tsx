import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

type Params = {
  meme_id: string;
};

export default function MemePage() {
  const { meme_id } = useLocalSearchParams<Params>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Meme page {meme_id}</Text>
    </View>
  );
}
