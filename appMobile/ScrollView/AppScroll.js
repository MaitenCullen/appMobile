import React from 'react';
import { ScrollView, Text, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>chapi</Text>
      <Image source={require('./assets/chapi1.JPG')}/>
      <Text>chapi otra vez</Text>
      <Image source={require('./assets/chapi2.jpg')}/>
    </ScrollView>
  );
}