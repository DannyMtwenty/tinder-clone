import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
      <ImageBackground
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        }}
        style={styles.image}>

<View style={styles.cardInner}>
       
          <Text style={styles.name}>Wajakoya</Text>
          <Text style={styles.bio}>The wakojoya fifth do you think?</Text>
          </View>
       
      </ImageBackground>

     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image :{
    width: '100%',
    height: '100%',
    borderRadius: 15,
    
    overflow: 'hidden',

    justifyContent: 'flex-end',
    
  },
  card :{
    width: '95%',
    height: '70%',
    borderRadius: 15,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,

  },
  name :{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold', 
  },
  bio :{
    fontSize: 18,
    color: 'white',
    lineHeight: 25,   
  },
  cardInner: {
    padding: 10,
  },
});
