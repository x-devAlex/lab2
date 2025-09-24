import { View, Text, StatusBar, Image } from "react-native";
import { styles } from "../../src/styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/barcelona.png")}
        />
      </View>

      <Text style={styles.subtitle}>Welcome to FC Barcelona App!</Text>
    </View>
  );
}
