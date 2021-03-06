import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ExamScreen from './Exams'

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
          },
          
        }} name='Exams' component={ExamScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default index
