import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect,useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Place from '../PlaceContext';

const PlacesScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "",
            headerLeft: () => (
                <Pressable style={{flexDirection:"row",alignItems:"center",gap:10}}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={{fontSize:16,letterSpacing:1}}>Change Location</Text>
                </Pressable>
        )
        })
    },[]);
    const { selectedCity, setSelectedCity } = useContext(Place);
    return (
        <View>
            <View>
                <TextInput></TextInput>
            </View>
        </View>
    )
}

export default PlacesScreen

const styles = StyleSheet.create({})