import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Tropa do calvo
      </Text>
      <Image style={styles.logo} source={require('../assets/calvo.jpg')} />
      <br/>
      <Image style={styles.logo} source={require('../assets/prof.PNG')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'black'

  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'black'
  },
  logo: {
    height: 128,
    width: 128,
    borderRadius: 70,
    
  }
});
