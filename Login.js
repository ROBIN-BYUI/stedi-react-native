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
        placeholder = "Phone number"
        keyboardType = "Alphanumeric"
      />
      <Button title = "send two-step verification  " onPress={()=> fetch('https://dev.stedi.me/twofactorlogin/'+text, {method: "post"})}></Button>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="Alphanumeric"

      />
      <Button title = "log in " onPress={()=> fetch('https://dev.stedi.me/twofactorlogin', {
        method: "POST",
        body: JSON.stringify({
          phoneNumber: text,
          oneTimePassword: number}),
      })
      .then((response) => {
        if(response.status == 200){
          const token = response.text()
          return token}
          else{(Alert.alert("unable to login"))}
        })
        .then((token) => {fetch('https://dev.stedi.me/validate/' + token,
        {method: "GET"})
      .then((response) => {
        if(response.status==200){
          response.text().then(function (email) {props.setUserEmail(email)
          props.setUserLoggedIn(true)})}
          else{(Alert.alert("unable to login"))}
        }
      )
      })}
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

function sendcode(phonenumber) {
  fetch(('https://dev.stedi.me/towfactorlogin/' + phonenumber) , {
    method: 'POST'
} );
}