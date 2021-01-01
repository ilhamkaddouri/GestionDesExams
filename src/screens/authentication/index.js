import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Authentication from '../authentication/authentication'
import Register from '../authentication/register'
const Stack = new createStackNavigator()
const index = () => {
    return (
           <Stack.Navigator screenOptions={{headerShown:false}}>
               <Stack.Screen
               name="Authentication"
               component={Authentication}
               />
               <Stack.Screen
               name="Register"
               component={Register}
               />
           </Stack.Navigator>
       
    )
}

export default index
