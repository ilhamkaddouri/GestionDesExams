import React from 'react'
import { View, Text , ImageBackground,StyleSheet} from 'react-native'
import logo from '../../../shared/images/background1.png'
const Home = () => {
    return (
        <ImageBackground source={logo} style={{flex:1}}>
            <View class={styles.container}>
             <Text>Home drawer</Text>
             
            </View>
        </ImageBackground>
        
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
       
        alignItems: 'center',
        justifyContent: 'center',
    }})
export default Home
