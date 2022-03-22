import React from 'react';
import { Text, View, FlatList } from 'react-native';
import useStorageFavorites from "../api/useStorageFavorites";
import ListItem from "./ListItem";

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useStorageFavorites()

    if (!favorites.length) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>You have no favorites yet</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={favorites}
                keyExtractor={({ number }) => `${number}`}
                renderItem={({ item, index }) => {
                    return (
                        <ListItem
                            icon="trash"
                            onIconPress={() => {
                                const foundIndexInFavorites = favorites.findIndex(favorite => item.number === favorite.number)
                                favorites.splice(foundIndexInFavorites, 1)
                                setFavorites([...favorites])
                            }}
                        >
                            <Text>{item.number}. {item.fact}</Text>
                        </ListItem>
                    )
                }}
            />
        </View>
    )
}
