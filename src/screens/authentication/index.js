import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Authentication from '../authentication/authentication'
import Register from '../authentication/register'
import RegisterProf from '../authentication/registerprof'
import AuthenticationProf from './authprof'
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
                <Stack.Screen
               name="AuthProf"
               component={AuthenticationProf}
               />
                <Stack.Screen
               name="RegisterProf"
               component={RegisterProf}
               />
           </Stack.Navigator>
       
    )
}

export default index
