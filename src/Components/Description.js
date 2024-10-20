import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import GradientButton from './Comman/Button';

const Description = () => {
    const heading = ['Description', 'Personality', 'Career', 'Health'];

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Understanding your Kundli</Text>
            <View style={styles.buttonRow}>
            <GradientButton title="General" />
                <TouchableOpacity style={[styles.button, styles.buttonSpacing]}>
                    <Text style={styles.buttonText2}>Planetary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText2}>Yoga</Text>
                </TouchableOpacity>
            </View>
            {heading.map((item, index) => (
                <ImageBackground
                    key={index}
                    source={require('../SVG/3.png')}
                    style={styles.headerBackground}
                    imageStyle={styles.imageBorderRadiusTop}
                >
                    <Text style={styles.title}>{item}</Text>
                    <Text style={styles.text}>
                        Ascendant is one of the most sought concepts in astrology
                        when it comes to predicting the minute events in your life.
                    </Text>
                    <Text style={styles.text}>
                        At the time of birth, the sign that rises in the sky is the
                        person's ascendant. It helps in making predictions about
                        the minute events, unlike your moon or sun sign that help
                        in making weekly, monthly, or yearly predictions for you.
                    </Text>
                    <Text style={styles.text}>Your ascendant is Pisces.</Text>
                </ImageBackground>
            ))}
        </View>
    );
};

export default Description;

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginVertical: 20,
    },
    headerText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#ffffff',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        marginRight: 20,
    },
    button2: {
        backgroundColor: '#b3e5fc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: '#171717',
        fontSize: 14,
        fontWeight: '400',
    },
    buttonText2: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400',
    },
    buttonSpacing: {
        marginLeft: 20,
    },
    headerBackground: {
        marginTop: 20,
        width: 350,
        height: 220,
        justifyContent: 'center',
        overflow: 'hidden',
        paddingHorizontal: 15,
        opacity:0.7
    },
    imageBorderRadiusTop: {
        borderRadius: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: '#fff',
        lineHeight: 22,
    },
});
