import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home'
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()
const index = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor : '#8174B3'}}}>
            <Stack.Screen name='Home' component={HomeScreen} options={{
                title:'Home',
                headerRight:()=>(
                    <Ionicons.Button name='ios-list' color='#fff' backgroundColor='#8174B3' size={25} options={()=>navigation.openDrawer()}></Ionicons.Button>
                )
            }} ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default index
