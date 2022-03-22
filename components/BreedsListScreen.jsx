import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import BreedsList from "./BreedsList";

const fetchBreeds = () => {
	return fetch('https://dog.ceo/api/breeds/list/all').then(response => {
		return response.json()
	}).then(json => Object.keys(json.message))
}

export default function BreedsListScreen({ navigation }) {
	const [breeds, setBreeds] = useState([])
	useEffect(() => {
		fetchBreeds().then(setBreeds)
	}, [])
	const onBreedPress = (breed) => {
		navigation.navigate('BreedView', {
			breed
		})
	}
	return (
		<View style={{ flex: 1 }}>
			<BreedsList items={breeds} onItemPress={onBreedPress} />
		</View>
	);
}
