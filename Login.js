import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";


export default function Login(props){



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
      <Button title = "send two-step verification  " onPress={()=>sendcode(text)}></Button>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="Alphanumeric"

      />
      <Button title = "log in " onPress={()=>props.setUserloggedIn(true)}></Button>
     
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

function sendcode(phonenumber) {
  fetch(('https://dev.stedi.me/towfactorlogin/' + phonenumber) , {
    method: 'POST'
} );
}