import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Authentication from './src/screens/authentication/authentication'
import Register from './src/screens/authentication/register'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Navigation from './src/navigation/navigation'
import {REACT_URL} from './src/constants/env.js'


import {UserContext} from './src/context/UserContext'
import {ProfContext} from './src/context/ProfContext'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack =  createStackNavigator()
export default function App() {
  const user_data = useContext(UserContext)

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [profData, setProfData] = useState({
    token: undefined,
    user: undefined, //user
  });
  useEffect(()=>{

    // const checkLoggedIn = async () => {
    //   // console.log("hgkuhfh,fh,fvh,");
    //  if(user_data)
    //  {
    //   console.log(user_data);
    //  }
    //  else{
    //    console.log("No one logged in ")
    // //  }
    // };

    // // console.log(userData);
    // checkLoggedIn();

  },[]);




  return (
    

    <UserContext.Provider value={{ userData, setUserData }}>
    <ProfContext.Provider value={{ profData, setProfData }}>
          <Navigation/>
    </ProfContext.Provider>
    </UserContext.Provider>

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
