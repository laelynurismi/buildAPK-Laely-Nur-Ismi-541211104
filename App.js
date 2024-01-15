import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Linking,
} from "react-native";

// You can import supported modules from npm

// or any files within the Snack
import AssetExample from "./components/AssetExample";

export default function App() {
  const handlePressProject1 = () => {};
  const handlePressProject2 = () => {};
  return (
    <ScrollView style={styles.container}>
      <Image source={require("./assets/canv.jpg")} style={styles.profile} />

      <Text style={styles.title}>Laely Nur Ismi</Text>
      <Text style={styles.paragraph}>
        Saya merupakan siswi SMK Telkom Purwokerto yang tertarik di bidang IT.
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.btnLogin,
          { backgroundColor: pressed ? "#DDDDDD" : "#000000" },
        ]}
      >
        <Text style={styles.btntext}>Contact Me</Text>
      </Pressable>
      <View style={{ maxWidth: "100%" }}>
        <Text style={styles.title}>My Project</Text>

        <Image
          source={require("/assets/Project.png")}
          style={styles.project2}
        />
        <Text style={styles.projectTitle}>Landing Page</Text>
        <Text style={styles.projectCat}>UI/UX Design</Text>
        <Text style={[styles.projectCat, { marginTop: 10 }]}>View on:</Text>
        <Pressable
          style={({ pressed }) => [
            styles.btnProject,
            { backgroundColor: pressed ? "#DDDDDD" : "#000000" },
          ]}
          onPress={handlePressProject1}
        >
          <Text style={{ color: "#ffffff" }}>Figma</Text>
        </Pressable>
        <Text style={{ borderColor: "black" }}></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#BFBFB2",

    alignItems: "center",
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 14,
    margin: 10,
    color: "grey",
    textAlign: "center",
    justifyContent: "center",
  },
  profile: {
    width: 156,
    height: 156,
    marginTop: 50,
    borderRadius: 10,
    marginLeft: "28%",
  },
  btnLogin: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#2F3540",
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  Project: {
    maxWidth: "100%",
    maxHeight: 350,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  project2: {
    maxWidth: "100%",
    maxHeight: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  projectTitle: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 18,
  },
  projectCat: {},
  btnProject: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
  },
});
