import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import NoteScreen from './ListNotes'

const Stack = createStackNavigator()
const index = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:true}}>
            <Stack.Screen options={{
            title: 'Notes',
            headerStyle: {
                backgroundColor: '#8174B3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
          },}} name='Notes' component={NoteScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default index
