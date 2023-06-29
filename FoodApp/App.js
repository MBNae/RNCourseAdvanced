import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from './screen/MealDetailScreen';
import FavoriteScreen from './screen/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#01A79D' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                sceneContainerStyle: { backgroundColor: '#ffffff' },
                drawerContentStyle: { backgroundColor: '#01A79D' },
                drawerInactiveTintColor: '#fff',
                drawerActiveBackgroundColor: '#fff',
                drawerActiveTintColor: '#01A79D',
            }}>
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoriteScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: '#01A79D' },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        contentStyle: { backgroundColor: '#ffffff' },
                        animation: 'slide_from_right',
                    }}>
                    <Stack.Screen
                        name="Drawer"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                        options={{
                            title: 'About The Meal',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
