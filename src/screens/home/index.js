import React from 'react'
import { View, Text } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import Home from './home'
const Stack = createStackNavigator()
const index = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}

export default index
