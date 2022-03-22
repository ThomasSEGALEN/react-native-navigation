import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import BreedsNavigator from "./components/BreedsNavigator";
import FactsScreen from "./components/FactsScreen";
import FavoritesScreen from "./components/FavoritesScreen";


const AppTabs = createBottomTabNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<AppTabs.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;
							switch (route.name) {
								case 'Pictures':
									iconName = 'images'
									break;
								case 'Facts':
									iconName = 'book'
									break;
								case 'Favorites':
									iconName = 'bookmarks'
									break;
							}
							return iconName
								? <Ionicons name={iconName} size={size} color={color} />
								: null;
						},
					})}
				>
					<AppTabs.Screen name="Pictures" component={BreedsNavigator} options={{ headerShown: false }} />
					<AppTabs.Screen name="Facts" component={FactsScreen} />
					<AppTabs.Screen name="Favorites" component={FavoritesScreen} />
				</AppTabs.Navigator>
			</NavigationContainer>
		</>
	);
}