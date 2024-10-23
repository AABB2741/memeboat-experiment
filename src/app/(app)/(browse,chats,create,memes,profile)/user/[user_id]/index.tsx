import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

type Params = {
  user_id: string;
};

export default function UserPage() {
  const { user_id } = useLocalSearchParams<Params>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User page {user_id}</Text>
    </View>
  );
}
