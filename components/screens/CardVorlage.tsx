import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";

interface ICard {
    title: string,
    subtitle: string
}

const CardVorlage = ({title, subtitle}: ICard) => {
    const [stars, setStars] = useState(0);

    const handleStarClick = (starCount: number) => {
        setStars(starCount);
    };


    return (
        <View style={styles.card}>
                <Image style={styles.image} source={require('../../assets/jacket.jpg')}></Image>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <TouchableOpacity onPress={() => handleStarClick(1)}>
                        <Text>{stars >= 1 ? '★' : '☆'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleStarClick(2)}>
                        <Text>{stars >= 2 ? '★' : '☆'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleStarClick(3)}>
                        <Text>{stars >= 3 ? '★' : '☆'}</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200, // Höhe des Bildes anpassen
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
})

export default CardVorlage;