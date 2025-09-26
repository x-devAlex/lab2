import { Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

export function ThemedText({ style, type = "default", children, ...props }) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    default: {
      fontSize: 16,
      lineHeight: 26,
      color: theme.text,
      textAlign: "justify",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: theme.title,
    },
    subtitle: {
      fontSize: 22,
      fontWeight: "600",
      marginBottom: 10,
      color: theme.title,
    },
    achievements: {
      fontSize: 16,
      color: theme.text,
      textAlign: "center",
      lineHeight: 26,
    },
  });

  return (
    <Text style={[styles[type], style]} {...props}>
      {children}
    </Text>
  );
}
