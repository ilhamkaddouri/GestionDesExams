import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import ProfileStack from '../home/profile/index'
import ExamStack from '../home/exams/index' 
import NoteStack from '../home/notes/index'
const Tab = createBottomTabNavigator()
const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
            
  
              if (route.name === 'Exams') {
                iconName = focused ? 'md-home-sharp' : 'md-home-sharp';
              } else if (route.name === 'Notes') {
                iconName = focused ? 'ios-menu' : 'ios-menu';
              }else if(route.name == 'Profile'){
                iconName = focused ? 'ios-heart' : 'ios-heart';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#8174B3',
            inactiveTintColor: '#231E39',
          }}>
            
            <Tab.Screen name='Exams' component={ExamStack} />
            <Tab.Screen name='Notes' component={NoteStack} />
            <Tab.Screen name='Profile' component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default HomeTabs
