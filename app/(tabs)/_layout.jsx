import { Tabs } from "expo-router";
import { Ionicons, Foundation, Entypo } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0a0a23",
        },
        headerTintColor: "#edcc0eff",
        tabBarStyle: {
          backgroundColor: "#0a0a23",
          borderTopColor: "#edcc0eff",
        },
        tabBarActiveTintColor: "#edcc0eff",
        tabBarInactiveTintColor: "gray",
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
