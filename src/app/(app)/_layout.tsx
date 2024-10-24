import { Tabs } from "expo-router";
import {
  Compass,
  MessageCircle,
  PlusCircle,
  Smile,
  UserCircle,
} from "lucide-react-native";
import { useTheme } from "styled-components/native";

export default function AppLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.bg.secondary,
          borderColor: theme.colors.border.primary,
        },
        tabBarInactiveTintColor: theme.colors.fg.primary,
        tabBarActiveTintColor: theme.colors.accent,
        tabBarLabelStyle: {
          fontSize: theme.font.size.xs,
          fontFamily: theme.font.family.regular,
        },
      }}
    >
      <Tabs.Screen
        name="(memes)"
        options={{
          tabBarLabel: "Memes",
          tabBarIcon: ({ color, size }) => <Smile color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="(browse)"
        options={{
          tabBarLabel: "Navegar",
          tabBarIcon: ({ color, size }) => (
            <Compass color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(create)/index"
        options={{
          tabBarLabel: "Criar",
          tabBarIcon: ({ color, size }) => (
            <PlusCircle color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(chats)/index"
        options={{
          tabBarLabel: "Conversas",
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          tabBarLabel: "Você",
          tabBarIcon: ({ color, size }) => (
            <UserCircle color={color} size={size} />
          ),
          href: "/(app)/(profile)/user/me",
        }}
      />
    </Tabs>
  );
}
