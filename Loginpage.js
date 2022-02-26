import React from "react";
import { SafeAreaView, StyleSheet, TextInput, } from "react-native";


const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Username");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder = "Username"
        keyboardType = "Alphanumeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="Alphanumeric"

      />
      
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;