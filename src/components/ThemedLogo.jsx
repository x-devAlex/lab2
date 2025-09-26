import { Image, View, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

export function ThemedLogo({ source }) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    logoContainer: {
      backgroundColor: theme.logoBackground,
      padding: 15,
      borderRadius: 100,
      elevation: 5,
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 5,
      marginBottom: 20,
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: "contain",
    },
  });

  return (
    <View style={styles.logoContainer}>
      <Image style={styles.image} source={source} />
    </View>
  );
}