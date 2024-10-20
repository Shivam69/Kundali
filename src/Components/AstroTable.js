import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';

const headerBackgroundImage = require('../SVG/2.png');
const listBackgroundImage = require('../SVG/1.png');

const data = [
    { planet: 'Ascendant', sign: 'Pisces', signLord: 'Jupiter', degree: '13°13\'24', house: '1' },
    { planet: 'Sun', sign: 'Sagittarius', signLord: 'Jupiter', degree: '13°13\'24', house: '10' },
    { planet: 'Moon', sign: 'Aries', signLord: 'Mars', degree: '13°13\'24', house: '2' },
    { planet: 'Mercury', sign: 'Capricorn', signLord: 'Saturn', degree: '13°13\'24', house: '11' },
    { planet: 'Venus', sign: 'Capricorn', signLord: 'Saturn', degree: '13°13\'24', house: '11' },
    { planet: 'Mars', sign: 'Capricorn', signLord: 'Saturn', degree: '13°13\'24', house: '11' },
    { planet: 'Jupiter', sign: 'Sagittarius', signLord: 'Jupiter', degree: '13°13\'24', house: '10' },
    { planet: 'Saturn', sign: 'Aquarius', signLord: 'Jupiter', degree: '13°13\'24', house: '12' },
    { planet: 'Rahu', sign: 'Virgo', signLord: 'Mercury', degree: '13°13\'24', house: '12' },
    { planet: 'Ketu', sign: 'Pisces', signLord: 'Mercury', degree: '13°13\'24', house: '12' },
    { planet: 'Neptune', sign: 'Capricorn', signLord: 'Saturn', degree: '13°13\'24', house: '12' },
    { planet: 'Uranus', sign: 'Capricorn', signLord: 'Saturn', degree: '13°13\'24', house: '12' },
    { planet: 'Pluto', sign: 'Capricorn', signLord: 'Saturn', degree: '13°13\'24', house: '12' },
];

const AstrologyChart = () => {
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.planet}</Text>
            <Text style={styles.cell}>{item.sign}</Text>
            <Text style={styles.cell}>{item.signLord}</Text>
            <Text style={styles.cell}>{item.degree}</Text>
            <Text style={[styles.cell,{right:5}]}>{item.house}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={headerBackgroundImage} style={styles.headerBackground} imageStyle={styles.imageBorderRadiusTop}>
                <View style={styles.headerRow}>
                    <Text style={styles.headerCell}>Planet</Text>
                    <Text style={styles.headerCell}>Sign</Text>
                    <Text style={styles.headerCell}>Sign Lord</Text>
                    <Text style={styles.headerCell}>Degree</Text>
                    <Text style={styles.headerCell}>House</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={listBackgroundImage} style={styles.listBackground} imageStyle={styles.imageBorderRadiusBottom}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.planet}
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 20,
        marginTop: 20,
        opacity:0.7
    },
    headerBackground: {
        width: '100%',
        height: 60, 
        justifyContent: 'center',
        overflow: 'hidden',
    },
    listBackground: {
        flex: 1,
        width: '100%',
        overflow: 'hidden',
    },
    imageBorderRadiusTop: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    imageBorderRadiusBottom: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        left:5
    },
    headerCell: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        fontWeight:'400'
    },
});

export default AstrologyChart;
