import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AstroTable from './AstroTable';
import GradientButton from './Comman/Button';

const Planets = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Planets</Text>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign</Text>
                </TouchableOpacity>
                <GradientButton title="Nakshatra" />
            </View>
            <AstroTable />
        </View>
    );
};

export default Planets;

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },
    title: {
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
        paddingVertical: 5,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400',
    },
    buttonText2: {
        color: '#000',
        fontSize: 16,
    },
});
