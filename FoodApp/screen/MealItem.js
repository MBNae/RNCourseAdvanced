import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import Card from '../ui/Card';

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
    return (
        <Card>
            <Pressable android_ripple={{ color: '#e5e5e5' }} style={({ pressed }) => pressed && styles.buttonPressed}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detail}>{duration}m</Text>
                        <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </Card>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.9,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detail: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
