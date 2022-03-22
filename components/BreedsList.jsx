import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

export default function BreedsList({ items, onItemPress }) {
	return (
		<FlatList
			data={items}
			keyExtractor={(item, i) => `${item}${i}`}
			renderItem={({item, index}) => (
				<TouchableOpacity
					style={{
						paddingVertical: 10,
						paddingHorizontal: 15
					}}
					onPress={() => {
						onItemPress(item, index)
					}}
				>
					<Text>
						{item[0].toUpperCase() + item.substring(1)}
					</Text>
				</TouchableOpacity>
			)}
		/>
	);
}
