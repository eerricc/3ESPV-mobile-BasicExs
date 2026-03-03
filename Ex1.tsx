import { StyleSheet, Image, Text, View } from 'react-native';
import bananaCat from './assets/banana_cat.jpg'
import icon from './assets/linkedin.png'

export default function Ex1() {
  return (
    <View style={styles.container}>
      <Image source={bananaCat} style={styles.image} resizeMode="cover" />
      <Image source={icon} style={styles.tinyLogo} resizeMode="cover" />
      <Text style={styles.text}>Eric Segawa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 350,
    height: 350,
    borderRadius: 200,
  },

  tinyLogo: {
    marginTop: 16,
    width: 50,
    height: 50,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'purple',
  }
});