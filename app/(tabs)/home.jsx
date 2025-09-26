import { StatusBar} from "react-native";
import { ThemedView } from "../../src/components/ThemedView";
import { ThemedText } from "../../src/components/ThemedText";
import { ThemedLogo } from "../../src/components/ThemedLogo";
import { styles } from "../../src/styles/global";

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ThemedLogo source={require("../../assets/images/content/barcelona.png")} />
      <ThemedText type="subtitle">Welcome to FC Barcelona App!</ThemedText>
    </ThemedView>
  );
}
