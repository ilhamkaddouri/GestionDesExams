import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import ProfileStack from '../home/profile/index'
import ExamStack from '../prfesseurHome/exam/index' 
import ExamsStack from '../prfesseurHome/exams/index'
const Tab = createBottomTabNavigator()
const HomePTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
            
  
              if (route.name === 'AjouterExam') {
                iconName = focused ? 'md-home-sharp' : 'md-home-sharp';
              } else if (route.name === 'List') {
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
            
            <Tab.Screen name='AjouterExam' component={ExamStack} />
            <Tab.Screen name='List' component={ExamsStack} />
            <Tab.Screen name='Profile' component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default HomePTabs
