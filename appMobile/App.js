import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Maite app 1</Text>
      <Image source={require('./assets/favicon.png')}/>
      <StatusBar style="auto" />
      <TextInput
      placeholder='escribi algo pibe'
      onChangeText={text => setText(text)}
      defaultValue={text}
      />
      <Text>
      {text.toUpperCase()}
      </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
