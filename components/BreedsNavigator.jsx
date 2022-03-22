import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BreedsListScreen from "./BreedsListScreen";
import BreedViewScreen from "./BreedViewScreen";

const BreedsStack = createStackNavigator();

export default function BreedsNavigator() {
	return (
		<BreedsStack.Navigator>
			<BreedsStack.Screen
				name="BreedsList"
				component={BreedsListScreen}
				options={() => ({
					title: 'Breeds'
				})}
			/>
			<BreedsStack.Screen
				name="BreedView"
				component={BreedViewScreen}
				options={({ route }) => ({
					title: (route.params.breed[0].toUpperCase() + route.params.breed.substring(1)).replace('/', ' - ')
				})}
			/>
		</BreedsStack.Navigator>
	)
}