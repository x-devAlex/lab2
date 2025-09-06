import { View, Text, StatusBar } from "react-native";
import { Link } from "expo-router";
import { styles } from "../src/styles";

export default function Achievements() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Achievements</Text>
      <Text style={styles.text}>
        🏆 La Liga — 27 titles{"\n"}
        🏆 UEFA Champions League — 5 titles{"\n"}
        🏆 Spanish Cup — 31 titles{"\n"}
        🏆 Club World Cup — 3 titles
      </Text>

      <View style={{ marginTop: 20 }}>
        <Link href="/">
          <Text style={styles.link}>Back to Home</Text>
        </Link>
        <Link href="/about">
          <Text style={styles.link}>Team History</Text>
        </Link>
      </View>
    </View>
  );
}
