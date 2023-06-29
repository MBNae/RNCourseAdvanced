import React, { useLayoutEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItem = itemData => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        return <MealItem {...mealItemProps} />;
    };

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    return (
        <View>
            <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem} />
        </View>
    );
};

export default MealsOverviewScreen;
