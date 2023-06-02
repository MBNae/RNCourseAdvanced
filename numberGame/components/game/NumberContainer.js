import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(92, 92, 15, 0.1)',
        borderWidth: 4,
        borderColor: Colors.boxColor500,
        padding: 24,
        margin: 24,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        fontSize: 36,
        // fontWeight: 'bold',
        color: Colors.boxColor400,
    },
});
