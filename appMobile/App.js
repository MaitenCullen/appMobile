import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView style={styles.images}>
        <Text>Maite app 1 ( GENE AGREGÓ CAMBIOS)</Text>
        {/* <Image source={require('./assets/favicon.png')}/> */}
        <Text>Imágenes de React para probar</Text>
        <Text>Éste es el logo de React</Text>
        <Image
          source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={{ width: 400, height: 400 }}
        />
        <Text>Y esto React Native</Text>
        <Image
          source={{
            uri: "https://i.postimg.cc/prxxfx3L/react-native-apps.jpg"
          }}
          style={{ width: 400, height: 400 }}
        />
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          placeholder="¿Cuál prefieres? Anota por acá"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text>{text.toUpperCase()}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    flex: 2,
  },
  input: {
    flex: 6,
  },
});
