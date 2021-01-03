import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/home/index'
import AuthenticationStackScreen from '../screens/authentication/index'
const Stack = createStackNavigator()
const navigation = () => {
    return (
       <NavigationContainer>
           <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='AuthenticationStack' component={AuthenticationStackScreen}/> 

               <Stack.Screen name='HomeScreen' component={HomeScreen}/>
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default navigation
