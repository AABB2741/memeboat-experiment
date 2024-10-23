import {
  LeagueSpartan_400Regular,
  LeagueSpartan_700Bold,
  useFonts,
} from "@expo-google-fonts/league-spartan";
import { ThemeProvider } from "styled-components/native";

import { defaultTheme } from "@/styles/theme";
import { Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_400Regular,
    LeagueSpartan_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
