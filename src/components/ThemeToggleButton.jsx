import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggleButton() {
  const { themeName, toggleTheme, theme } = useTheme();

  return (
    <Pressable onPress={toggleTheme} style={styles.themeButton}>
      <Ionicons
        name={themeName === "dark" ? "sunny" : "moon"}
        size={24}
        color={theme.headerText}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  themeButton: {
    marginRight: 15,
    padding: 5,
  },
});