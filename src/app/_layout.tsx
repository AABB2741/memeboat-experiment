import {
  LeagueSpartan_400Regular,
  LeagueSpartan_700Bold,
  useFonts,
} from "@expo-google-fonts/league-spartan";
import { Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";

import { defaultTheme } from "@/styles/themes/default";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={defaultTheme}>
        <Slot />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
