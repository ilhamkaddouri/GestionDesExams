import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './home/index'
import ExamStack from '../home/exams/index' 
import NoteStack from '../home/notes/index'
const Tab = createBottomTabNavigator()
const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
            
  
              if (route.name === 'Home') {
                iconName = focused ? 'md-home-sharp' : 'md-home-sharp';
              } else if (route.name === 'Exams') {
                iconName = focused ? 'ios-list' : 'ios-list';
              }else if(route.name == 'Notes'){
                iconName = focused ? 'ios-list' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#039b4f',
            inactiveTintColor: '#231E39',
          }}>
             <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Exams' component={ExamStack} />
            <Tab.Screen name='Notes' component={NoteStack} />
        </Tab.Navigator>
    )
}

export default HomeTabs
