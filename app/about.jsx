import { View, Text, StatusBar } from "react-native";
import { Link } from "expo-router";
import { styles } from "../src/styles";

export default function About() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Team History</Text>
      <Text style={styles.text}>
        FC Barcelona was founded in 1899 by a group of Swiss, Catalan, and English
        footballers led by Joan Gamper. The club has grown to become one of the
        most successful and popular teams in the world.
      </Text>

      <View style={{ marginTop: 20 }}>
        <Link href="/">
          <Text style={styles.link}>Back to Home</Text>
        </Link>
        <Link href="/achievements">
          <Text style={styles.link}>Achievements</Text>
        </Link>
      </View>
    </View>
  );
}
