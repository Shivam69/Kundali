import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { back } from '../SVG/files';

const Header = () => {
    const tabs = ['Basic', 'Chart', 'KP', 'Ashtakvarga', 'Dasha', 'Report'];

    return (
        <ImageBackground source={require('../SVG/headerbg.png')} style={styles.backgroundImage}>
            <View style={styles.headerRow}>
                <SvgXml xml={back} width="11" height="20" />
                <Text style={styles.headerTitle}>Kundali</Text>
            </View>
            <View style={styles.tabsRow}>
                {tabs.map((item, index) => (
                    <View key={index} style={styles.tabContainer}>
                        <Text style={index === 1 ? styles.activeTabText : styles.inactiveTabText}>{item}</Text>
                        {index !== 5 && <View style={styles.tabSeparator} />}
                    </View>
                ))}
            </View>
        </ImageBackground>
    );
};

export default Header;

const styles = StyleSheet.create({
    backgroundImage: {
        resizeMode: 'cover',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
    },
    headerTitle: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 15,
    },
    tabsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        padding: 5,
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activeTabText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#ffffff',
    },
    inactiveTabText: {
        fontSize: 13,
        fontWeight: '300',
        color: '#ffffff',
    },
    tabSeparator: {
        height: 15,
        width: 1,
        backgroundColor: 'white',
        marginLeft: 13,
    },
});
