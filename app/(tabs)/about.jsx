import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import { styles } from "../../src/styles";

export default function About() {
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
        <Text style={styles.title}>History: More than a club</Text>
        <Text style={styles.text}>
          FC Barcelona was founded in 1899 by a group of footballers led by Joan
          Gamper. The club has become a symbol of Catalan culture and identity,
          embodied in the slogan “Més que un club” (More than a club).
        </Text>

        <Image
          source={require("../../assets/camp_nou.jpg")}
          style={styles.contentImage}
        />

        <Text style={styles.text}>
          The club's home stadium, Camp Nou, is the largest in Europe and can
          seat almost 100,000 spectators. It is a real fortress and a place of
          pilgrimage for fans from all over the world.
        </Text>

        <Image
          source={require("../../assets/dream_team.jpg")}
          style={styles.contentImage}
        />

        <Text style={styles.text}>
          The Dream Team led by Johan Cruyff in the early 1990s occupies a
          special place in history. It changed the perception of football with
          its “total football” style and won the club's first European Cup in
          1992.
        </Text>
      </View>
    </ScrollView>
  );
}
