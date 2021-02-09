import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import uploadNotes from './uploadNotes'
import addNotes from './AddNote'
const Stack = createStackNavigator()
const index = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:true}}>
            <Stack.Screen options={{
            title: 'Attribuer les notes',
            headerStyle: {
                backgroundColor: '#8174B3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
          },}} name='List of users' component={uploadNotes}></Stack.Screen>
           <Stack.Screen options={{
            title: 'notes',
            headerStyle: {
                backgroundColor: '#8174B3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
          },}} name='Addnote' component={addNotes}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default index
