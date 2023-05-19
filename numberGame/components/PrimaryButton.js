import { Pressable, Text, View, StyleSheet } from 'react-native';

const PrimaryButton = ({ children }) => {
    const pressHandler = () => {
        console.log('실행');
    };

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => (pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer)}
                onPress={pressHandler}
                android_ripple={{ color: 'hsl(330, 90%, 30%)' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});

export default PrimaryButton;
