import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation=useNavigation();
  const moveAnimation=new Animated.Value(0);
  
  useEffect(()=>{  
    Animated.loop(
      Animated.timing(moveAnimation,{
        toValue:-30,
        duration:2000,
        useNativeDriver:true
      })
    ).start();

  },[])

    useLayoutEffect(()=>{
      navigation.setOptions(
      {
        headerLeft:()=><Text>Hello Arjun</Text>,
        headerStyles:{
          backgroundColor:"#F5F5F5",
          shadowColor:"transparent",
          shadowOpacity:0.3,
          shadowOffset:{width:-1,height:1},
          shadowRadius:3
        },
        headerRight:()=><Pressable style={{flexDirection:"row",alignItems:"center",gap:10}}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Ionicons onPress={()=>navigation.navigate("PlacesScreen")} name="ios-location-outline" size={24} color="black" />
            <Pressable onPress={()=>navigation.navigate("PlacesScreen")}>
              <Animated.Text style={[styles.text,{transform:[{ translateX: moveAnimation }]}]}>
                <Text>Kochi</Text>
              </Animated.Text>
            </Pressable>
        </Pressable>
      }
     )
    },[])
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text:{
    fontSize:16,

  }
})