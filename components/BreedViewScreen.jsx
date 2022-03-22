import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import BreedsList from './BreedsList';

const fetchSubBreeds = (breed) => {
	return fetch(`https://dog.ceo/api/breed/${breed}/list`)
		.then(response => response.json())
		.then(json => {
			if (json.status === "success") {
				return json.message
			}
			return []
		})
}

const fetchImages = (breed) => {
	return fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
		.then(response => response.json())
		.then(json => {
			if (json.status === "success") {
				return json.message
			}
			return []
		})
}

export default function BreedViewScreen({ navigation, route }) {
	const breed = route.params.breed
	if (!breed) {
		return null
	}
	const [images, setImages] = useState([])
	const [subBreeds, setSubBreeds] = useState([])

	useEffect(() => {
		fetchSubBreeds(breed).then(setSubBreeds)
		fetchImages(breed).then(setImages)
	}, [breed])

	const onSubBreedPress = (subBreed) => {
		navigation.push('BreedView', {
			breed: `${breed}/${subBreed}`,
		})
	}
	return (
		<View style={{ flex: 1 }}>
			{!!subBreeds.length &&
				<View style={{ flexShrink: 0, marginVertical: 15 }}>
					<Text style={{
						fontSize: 20,
						marginHorizontal: 15,
						marginBottom: 5,
						fontWeight: 'bold'
					}}>
						{route.params.breed[0].toUpperCase() + route.params.breed.substring(1)} breeds
					</Text>
					<BreedsList items={subBreeds} onItemPress={onSubBreedPress} />
				</View>
			}
			<FlatList
				data={images}
				keyExtractor={(image) => image}
				renderItem={({ item }) => (
					<Image
						source={{ uri: item }}
						resizeMode="contain"
						style={{
							height: 300,
							marginBottom: 20
						}}
					/>
				)}
			/>
		</View>
	)
}
