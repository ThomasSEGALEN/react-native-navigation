import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import useStorageFavorites from "../api/useStorageFavorites";
import ListItem from "./ListItem";

const fetchFacts = () => {
	return fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all').then(response => {
		return response.json()
	}).then(json => {
		return json.map(({ fact }, index) => ({
			fact,
			number: index + 1
		}))
	})
}

export default function FactsScreen() {
	const [facts, setFacts] = useState([])

	useEffect(() => {
		fetchFacts().then(setFacts)
	}, [])

	const [favorites, setFavorites] = useStorageFavorites()

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={facts}
				keyExtractor={({ number }) => `${number}`}
				renderItem={({ item, index }) => {
					const foundIndexInFavorites = favorites.findIndex(favorite => item.number === favorite.number)
					const isAlreadyInFavorites = foundIndexInFavorites !== -1
					const icon = isAlreadyInFavorites
						? 'heart'
						: 'heart-outline';
					return (
						<ListItem
							icon={icon}
							onIconPress={() => {
								if (isAlreadyInFavorites) {
									favorites.splice(foundIndexInFavorites, 1)
									setFavorites([...favorites])
								} else {
									setFavorites([...favorites, item])
								}
							}}
						>
							<Text>{item.number}. {item.fact}</Text>
						</ListItem>
					)
				}}
			/>
		</View>
	);
}
