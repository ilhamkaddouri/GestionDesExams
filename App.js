import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Authentication from './src/screens/authentication/authentication'
import Register from './src/screens/authentication/register'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Navigation from './src/navigation/navigation'
const Stack =  createStackNavigator()
export default function App() {
  return (
   
     <Navigation/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
