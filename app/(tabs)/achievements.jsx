import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import { styles } from "../../src/styles";

export default function Achievements() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      style={{ backgroundColor: "#0a0a23" }}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>The golden age</Text>
        <Text style={styles.achievementsText}>
          Barcelona is one of the most successful clubs in the world. Here are
          its key trophies:{"\n"}
          {"\n"}
          🏆 La Liga — 27 titles {"\n"}
          🏆 UEFA Champions League — 5 titles{"\n"}
          🏆 Spanish Cup — 31 titles {"\n"}
          🏆 Club World Cup — 3 titles
        </Text>

        <Image
          source={require("../../assets/sextuple.jpg")}
          style={styles.contentImage}
        />

        <Text style={styles.text}>
          In 2009, under the leadership of Pep Guardiola, Barcelona became the
          first and only club in history to win six trophies in a single
          calendar year (sextuple): La Liga, the Spanish Cup, the Champions
          League, the Spanish Super Cup , the UEFA Super Cup, and the Club World
          Cup.
        </Text>

        <Image
          source={require("../../assets/champions.jpg")}
          style={styles.contentImage}
        />

        <Text style={styles.text}>
          The club is also the only one in Europe to have achieved the “golden
          treble” twice (winning the national championship, cup, and Champions
          League in a single season) — in the 2008/09 and 2014/15 seasons.
        </Text>
      </View>
    </ScrollView>
  );
}
