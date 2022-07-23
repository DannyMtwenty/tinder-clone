import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, Text, View, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import Card from "./src/components/TinderCard";
import users from "./assets/data/users";



export default function App() {

  const sharedValue = useSharedValue(1);
  const cardStyle = useAnimatedStyle(() => ({
    opacity: sharedValue.value,
  }));

  return (
    <View style={styles.pageContainer}>
      <Animated.View style={[styles.animatedCard,cardStyle]}>
        <Card user={users[2]} />
      </Animated.View>
    
    <Pressable onPress={() => sharedValue.value = Math.random()} style={{marginBottom : 60}}>
       <Text>Change me</Text>
      </Pressable>
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
  animatedCard: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    justifyContent : 'center',
    alignItems : 'center',
   
  },
});
