import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorageItem = (key, defaultValue = null) => {
    return AsyncStorage.getItem(key)
        .then(value => {
            if (value !== null) {
                return JSON.parse(value)
            }
            return defaultValue
        })
}

export const setStorageItem = (key, value) => {
    return AsyncStorage.setItem(key, JSON.stringify(value))
}