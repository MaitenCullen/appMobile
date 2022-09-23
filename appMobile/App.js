import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, ScrollView, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
    <ScrollView style={styles.images}>
      <Text>Maite app 1</Text>
      {/* <Image source={require('./assets/favicon.png')}/> */}
      <Text>chapiiiii</Text>
      <Image source={require('./assets/chapi1.png')}/>
      <Text>chapi</Text>
      <Image source={require('./assets/chapi2.png')}/>
      <StatusBar style="auto" />
      <TextInput style={styles.input}
      placeholder='escribi algo pibe'
      onChangeText={text => setText(text)}
      defaultValue={text}
      />
      <Text>
      {text.toUpperCase()}
      </Text>  
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
images:{
  flex:2,
},
input:{
  flex:6,
}
});
