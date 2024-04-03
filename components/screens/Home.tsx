import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {IUser} from "./IUser";

const Home = ({navigation}: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [users,setUsers] = useState<IUser[]>([
        { username: "Fabian", password:"1234"}
    ]);

    const handleLogin = () => {
        const user = users.find((user) => user.username === username && user.password === password);
        if(user){
            navigation.navigate("Cards");
        }else{
            console.log("nein!")
        }
    }

    return (
       <View>
           <Text>Hallo, willkommen zu meiner Seite!</Text>
            <Text>Username</Text>
           <TextInput style={styles.inputs} onChangeText={text => {setUsername(text)}}></TextInput>
           <Text>Password</Text>
           <TextInput style={styles.inputs} onChangeText={text => {setPassword(text)}}></TextInput>

           <Button title={"Login"} onPress={handleLogin}></Button>
       </View>
    );
};

const styles = StyleSheet.create({
    inputs: {
        color: "darkblue"
    }
})

export default Home;