import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = enteredText => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = () => {
        setEnteredNumber('');
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('유효하지 않은 숫자입니다.', '1~99 사이의 값을 입력해주세요.', [
                { text: '확인', style: 'destructive', onPress: resetInputHandler },
            ]);
            return;
        }

        onPickNumber(chosenNumber);
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                {/* <InstructionText style={styles.instructionText}>숫자를 입력해주세요</InstructionText> */}
                <InstructionText style={styles.instructionText}>Enter a number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad" //키보드 패드의 종류를 지정 (number-pad: 숫자패드만 나옴)
                    autoCapitalize="none" //영어 입력 시 자동으로 대문자로 바꿔주는 기능
                    autoCorrect={false} //문자 입력 시 자동 수정을 해주는 기능
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>리셋</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>확인</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        width: 50,
        height: 50,
        marginVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: Colors.boxText500,
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.boxText500,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
