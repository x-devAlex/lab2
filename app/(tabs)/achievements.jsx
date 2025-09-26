import { StatusBar, ScrollView, Image} from "react-native";
import { ThemedView } from "../../src/components/ThemedView";
import { ThemedText } from "../../src/components/ThemedText";
import { styles } from "../../src/styles/global";

export default function Achievements() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar barStyle="light-content" />
        <ThemedText type="title">The golden age</ThemedText>
        <ThemedText type="achievements">
          Barcelona is one of the most successful clubs in the world. Here are
          its key trophies:{"\n"}
          {"\n"}
          🏆 La Liga — 27 titles {"\n"}
          🏆 UEFA Champions League — 5 titles{"\n"}
          🏆 Spanish Cup — 31 titles {"\n"}
          🏆 Club World Cup — 3 titles
        </ThemedText>
        <Image
          source={require("../../assets/images/content/sextuple.jpg")}
          style={styles.contentImage}
        />
        <ThemedText>
          In 2009, under the leadership of Pep Guardiola, Barcelona became the
          first and only club in history to win six trophies in a single
          calendar year (sextuple): La Liga, the Spanish Cup, the Champions
          League, the Spanish Super Cup , the UEFA Super Cup, and the Club World
          Cup.
        </ThemedText>
        <Image
          source={require("../../assets/images/content/champions.jpg")}
          style={styles.contentImage}
        />
        <ThemedText>
          The club is also the only one in Europe to have achieved the “golden
          treble” twice (winning the national championship, cup, and Champions
          League in a single season) — in the 2008/09 and 2014/15 seasons.
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}
