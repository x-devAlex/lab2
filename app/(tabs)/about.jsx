import { StatusBar, ScrollView, Image} from "react-native";
import { ThemedView } from "../../src/components/ThemedView";
import { ThemedText } from "../../src/components/ThemedText";
import { styles } from "../../src/styles/global";

export default function About() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar barStyle="light-content" />
        <ThemedText type="title">History: More than a club</ThemedText>
        <ThemedText>
          FC Barcelona was founded in 1899 by a group of footballers led by Joan
          Gamper. The club has become a symbol of Catalan culture and identity,
          embodied in the slogan “Més que un club” (More than a club).
        </ThemedText>
        <Image
          source={require("../../assets/images/content/camp_nou.jpg")}
          style={styles.contentImage}
        />
        <ThemedText>
          The club's home stadium, Camp Nou, is the largest in Europe and can
          seat almost 100,000 spectators. It is a real fortress and a place of
          pilgrimage for fans from all over the world.
        </ThemedText>
        <Image
          source={require("../../assets/images/content/dream_team.jpg")}
          style={styles.contentImage}
        />
        <ThemedText>
          The Dream Team led by Johan Cruyff in the early 1990s occupies a
          special place in history. It changed the perception of football with
          its “total football” style and won the club's first European Cup in
          1992.
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}
