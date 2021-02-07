import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/home/index'
import HomePScreen from '../screens/prfesseurHome/index'
import AuthenticationStackScreen from '../screens/authentication/index'
import notePicker from '../screens/home/notePicker'
const Stack = createStackNavigator()
const navigation = () => {
    return (
       <NavigationContainer>
           <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='AuthenticationStack' component={AuthenticationStackScreen}/> 
               <Stack.Screen name='HomeScreen' component={HomeScreen}/>
               <Stack.Screen name='HomePScreen' component={HomePScreen}/>
               <Stack.Screen name='noteUploadScreen' component={notePicker}/>
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default navigation
