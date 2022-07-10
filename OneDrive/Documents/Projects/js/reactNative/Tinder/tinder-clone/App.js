import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import Card from "./src/components/TinderCard";
import users from "./assets/data/users"

const jeff = {
  name: "jesff",
  bio: "I am the wajakoye the fith",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
};
export default function App() {
  return (
    <View style={styles.pageContainer}>
      <Card user={users[2]} />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
