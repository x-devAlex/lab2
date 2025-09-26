import { Tabs } from "expo-router";
import { Ionicons, Foundation, Entypo } from "@expo/vector-icons";
import { useTheme } from "../../src/context/ThemeContext";
import { ThemeToggleButton } from "../../src/components/ThemeToggleButton";

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.header,
        },
        headerTintColor: theme.headerText,
        tabBarStyle: {
          backgroundColor: theme.header,
          borderTopColor: theme.primary,
        },
        tabBarActiveTintColor: theme.tabBarActive,
        tabBarInactiveTintColor: theme.tabBarInactive,
        headerRight: () => <ThemeToggleButton />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="info" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: "Achievements",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="trophy" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}