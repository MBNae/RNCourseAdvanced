import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad" //키보드 패드의 종류를 지정 (number-pad: 숫자패드만 나옴)
                autoCapitalize="none" //영어 입력 시 자동으로 대문자로 바꿔주는 기능
                autoCorrect={false} //문자 입력 시 자동 수정을 해주는 기능
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>리셋</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>확인</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        alignItems: 'center',
        backgroundColor: '#4e0329',
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
    },
    numberInput: {
        width: 50,
        height: 50,
        marginVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
