import { View, Text, StatusBar, Image } from "react-native";
import { Link } from "expo-router";
import { styles } from "../src/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>FC Barcelona</Text>

      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../assets/barcelona.png")}
        />
      </View>

      <Text style={styles.subtitle}>Welcome to FC Barcelona App!</Text>

      <View style={{ marginTop: 20 }}>
        <Link href="/about">
          <Text style={styles.link}>Team History</Text>
        </Link>
        <Link href="/achievements">
          <Text style={styles.link}>Achievements</Text>
        </Link>
      </View>
    </View>
  );
}
