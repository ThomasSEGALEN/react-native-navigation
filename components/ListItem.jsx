import React from 'react';
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ListItem({ children, icon, onIconPress, style }) {
    return (
        <View style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            ...style,
            flexDirection: 'row'
        }}>
            <View style={{ flex: 1, marginRight: 15 }}>{children}</View>
            {!!icon &&
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={onIconPress}>
                    <Ionicons name={icon} size={32} />
                </TouchableOpacity>
            }
        </View>
    )
}
