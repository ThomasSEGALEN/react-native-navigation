import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getStorageItem, setStorageItem } from "../api/storage";

export default function useStorageFavorites() {
    const [favorites, setFavorites] = useState([])

    // quand on arrive sur un onglet qui utilise ce hook, on récupère les favoris à jour
    useFocusEffect(useCallback(() => {
        getStorageItem('favorites', []).then(setFavorites)
    }, []))

    // dès qu'on modifie le state local (les favoris affichés),
    // on met à jour les favoris enregistrés en local
    useEffect(() => {
        setStorageItem('favorites', favorites)
    }, [favorites])

    // on retourne ce que retourne le useState, pour pouvoir
    // utiliser ceci comme un useState
    return [favorites, setFavorites]
}
