import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";

interface ICard {
    title: string,
    subtitle: string
}

const CardVorlage = ({title, subtitle}: ICard) => {
    const [stars, setStars] = useState(0);
    //starCount: number
    const handleStarClick = () => {
        //setStars(starCount);
        if(stars === 5)
            setStars(1);
        else {
            setStars(stars + 1);
        }
    };


    return (
        <View style={styles.card}>
                <Image style={styles.image} source={require('../../assets/jacket.jpg')}></Image>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <TouchableOpacity onPress={() => handleStarClick() }>
                        <Text>Stern</Text>
                        <View style={{flexDirection: "row"}}>
                            {[...Array(stars)].map((index) => (
                                <Image style={styles.stars} source={require("../../assets/stern.png")}></Image>
                            ))}
                        </View>
                    </TouchableOpacity>

                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 100, // Höhe des Bildes anpassen
        width: '100%', // Breite auf 100% des Containers setzen
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 20, // Platz zwischen den Karten hinzufügen
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 18, // Größe des Titels anpassen
        marginBottom: 7,
    },
    subtitle: {
        fontSize: 14, // Größe des Untertitels anpassen
    },
    stars: {
        height: 50, // Höhe des Bildes anpassen
        width: 50
    },
    button: {
        color: "darkblue"
    }
})

export default CardVorlage;