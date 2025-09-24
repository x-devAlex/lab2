import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a23",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#edcc0eff",
    marginBottom: 20,
    textAlign: "center",
  },
  logoContainer: {
    backgroundColor: "#fff",
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
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#edcc0eff",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: "#e0e0e0",
    textAlign: "justify",
    lineHeight: 26,
  },
  achievementsText: {
    fontSize: 16,
    color: "#e0e0e0",
    textAlign: "center",
    lineHeight: 26,
  },
  link: {
    fontSize: 18,
    color: "#edcc0eff",
    marginVertical: 5,
    textDecorationLine: "underline",
  },
  contentImage: {
    width: 320,
    height: 180,
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 20,
  },
  link: {
    fontSize: 18,
    color: "#edcc0eff",
    marginVertical: 5,
    textDecorationLine: "underline",
  },
});
