import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const guessRoundsListLength = guessRounds.length;

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRoundsListLength);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const NextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert('구라ㄴㄴ', '제대로 클릭해주세요.', [{ text: 'ㅇㅋ', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    };

    return (
        <View style={styles.screen}>
            <Title>이 숫자가 맞니?</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>숫자가 높니? 낮니?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton style={styles.primaryButton} onPress={NextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="#fff" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton style={styles.primaryButton} onPress={NextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="md-add" size={24} color="#fff" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={itemData => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={item => item}
                />
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingVertical: 100,
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    primaryButton: {
        paddingVertical: 6,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
});
