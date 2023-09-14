import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
     venha ser calvo tambem!!
      </Text>
      <Button
        title="Entre"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    
   
    <View>
    
      <View style={styles.fixToText}>
      
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
        backgroundColor: 'black'
  },
  title: {
    textAlign: 'center',
    marginVertical: 15,
    color:'azure'
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '##000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    
  },
});

export default App;