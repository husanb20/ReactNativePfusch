import React, {useState} from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import {IUser} from "./IUser";

const Home = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [users,setUsers] = useState<IUser[]>([
        { username: "Fabian", password:"1234"},
        {username: "admin", password:"admin"}
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
       <View style={styles.container}>
           <ImageBackground style={styles.background} source={require("../../assets/background.jpg")}>
               <Image style={styles.logo} source={require("../../assets/logo-red.png")}></Image>
               <Text>Hallo, willkommen zu meiner Seite!</Text>

               <View style={styles.form}>
                   <Text>Username</Text>
                   <TextInput style={styles.inputs} onChangeText={text => {setUsername(text)}}></TextInput>
                   <Text>Password</Text>
                   <TextInput style={styles.inputs} onChangeText={text => {setPassword(text)}}></TextInput>

                   <Button title={"Login"} onPress={handleLogin}></Button>
               </View>
           </ImageBackground>
       </View>
    );
};

const styles = StyleSheet.create({
    inputs: {
        color: "darkblue",
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logo: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    form:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
})

export default Home;