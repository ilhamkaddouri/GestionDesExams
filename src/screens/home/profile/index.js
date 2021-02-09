import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Profile'
import UProfileScreen from './updateProfile'
const Stack = createStackNavigator()
const index = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:true}}>
            <Stack.Screen options={{
            title: 'Exams',
            headerStyle: {
                backgroundColor: '#8174B3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
          },}} name='Profile' component={ProfileScreen}>
            
          </Stack.Screen>
          <Stack.Screen options={{
            title: 'Exams',
            headerStyle: {
                backgroundColor: '#8174B3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
          },}} name='UProfile' component={UProfileScreen}></Stack.Screen>
              
        </Stack.Navigator>
    )
}

export default index
