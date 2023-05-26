import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        padding: 12,
        color: Colors.white,
        borderWidth: 3,
        borderColor: Colors.white,
    },
});
