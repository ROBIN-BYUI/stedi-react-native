import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

export default function Login(props){

const [text, onChangeText] = React.useState("");
const [number, onChangeNumber] = React.useState(null);

return (
<SafeAreaView>
<TextInput
style={styles.input}
onChangeText={onChangeText}
value={text}
placeholder="Phone Number"
keyboardType="alphanumeric"
/>
<Button title="Send  Password" onPress={()=>sendCode(text)}></Button>

<TextInput
style={styles.input}
onChangeText={onChangeNumber}
value={number}
placeholder=" Password"
keyboardType="alphanumeric"
/>
<Button title="log In" onPress={()=>{

props.setUserLoggedIn(true)}}>

</Button>
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

function sendCode(phoneNumber) {
fetch(('https://dev.stedi.me/twofactorlogin/' + phoneNumber), {
method: 'POST',
headers:{
Accept:"application/json",
"Content-Type":"application/json"
},
//body: JSON.stringify
});
}

function checkcode(phoneNumber,password,props) {
    fetch('https://dev.stedi.me/two-factorlogin/' + phoneNumber), {
        method: 'Post',
        headers:{
            Accept:"applicatiion/json"
        },
        body: JSON.stringify
    }
}