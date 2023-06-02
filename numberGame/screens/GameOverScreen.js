import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
const GameOverScreen = ({ userNumber, roundNumber, onStartNewGame }) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/image/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                핸드폰이 숫자 <Text style={styles.highlight}>{userNumber}</Text> 를 맞추는데{' '}
                <Text style={styles.highlight}>{roundNumber}</Text> 번 걸렸습니다.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>다시하기</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.white,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.boxColor400,
    },
});
