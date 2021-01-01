import React from 'react'
import { View, Text, StyleSheet ,Image,Button,TouchableOpacity} from 'react-native'
import {Input} from 'react-native-elements'
import logo from '../../shared/images/ensias-logo.png'
const register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.imageStyle}></Image>
            </View>
            <View style={styles.inputs}>
                    
                    <Input style={styles.textInput} placeholder="Nom" />
                    <Input style={styles.textInput} placeholder="Prenom" />
                    <Input style={styles.textInput} placeholder="Email" />
                    <Input style={styles.textInput} placeholder="Password" secureTextEntry={true}/>
                    <Button title="Login" color="#EE352C" style={{}} onPress={()=> console.log('hello')}/>
                </View>   
                <View style={styles.bottom}>
                    <Text style={{color:"#c6c6c6"}}>Already have an account ?</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Authentication')}>
                        <Text title='register' style={{color:"#A9A9A9", fontWeight:'bold'}}>Login </Text>
                    </TouchableOpacity>
                </View>   
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    logoContainer:{
        alignItems:"center",
        flex:2,
        justifyContent:'center',
        width:"100%",
       
    },
   
    imageStyle:{
       
        width:'40%',
        height:'60%',

    },inputs:{
        flex:3,
        justifyContent:'space-evenly',
        width:"90%",
        paddingVertical:"5%",
        alignSelf:'center'
        
    },
    bottom:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default register
