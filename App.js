import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import Card from "./src/components/TinderCard";
import users from "./assets/data/users";




const sharedValue = useSharedValue(1);
const cardStyle = useAnimatedStyle(() => ({
  opacity: sharedValue.value,
}));

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
