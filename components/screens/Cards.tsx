import React from 'react';
import { Text, View} from "react-native";
import CardVorlage from "./CardVorlage";


const Cards = () => {
    const products = [
        { title: "Jacket", subtitle: "gut gefüttert" },
        { title: "Couch", subtitle: "gut eingelegen" },
        { title: "Nachhilfe", subtitle: "React native" },
        { title: "Sessel", subtitle: "ganz in weiss", }
    ];



    return (
        <View>
            <Text>Willkommen im Cards Shop!</Text>
                {products.map(product => (
                    <CardVorlage title={product.title} subtitle={product.subtitle}></CardVorlage>
                ))}
        </View>
    );
};

export default Cards;
