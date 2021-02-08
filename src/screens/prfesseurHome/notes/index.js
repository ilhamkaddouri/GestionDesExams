import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import uploadNotes from './uploadNotes'

const Stack = createStackNavigator()
const index = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:true}}>
            <Stack.Screen options={{
            title: 'List des Exam',
            headerStyle: {
                backgroundColor: '#8174B3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
          },}} name='List des Exams' component={uploadNotes}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default index
