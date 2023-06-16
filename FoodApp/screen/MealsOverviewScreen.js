import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from './MealItem';

const MealsOverviewScreen = ({ route }) => {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItem = itemData => {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        return <MealItem {...mealItemProps} />;
    };

    return (
        <View>
            <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem} />
        </View>
    );
};

export default MealsOverviewScreen;
