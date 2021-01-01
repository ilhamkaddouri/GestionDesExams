import React from 'react'
import { View, Text, TextInput,Button ,StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native'
import {Input} from 'react-native-elements'
import background from '../../shared/images/background1.png'
import logo from '../../shared/images/ensias-logo.png'
const authentication = ({navigation}) => {
    return (
        <View style={styles.container}>
                
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.imageStyle}></Image>
                    
                </View>
              
      
                <View style={styles.inputs}>
                    <Input style={styles.textInput} placeholder="Email" />
                    <Input  style={styles.textInput} placeholder="Password" secureTextEntry={true}/>
                    <Button title="Login" color="#EE352C" onPress={()=> console.log('hello')}/>
                </View>   
                <View style={styles.bottom}>
                    <Text style={{color:"#c6c6c6"}}>Don't have an account ?</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Register')}>
                        <Text title='register' style={{color:"#A9A9A9", fontWeight:'bold'}}>Register </Text>
                    </TouchableOpacity>
                </View>   

       
        
        </View>
        
    )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        fontSize :25,
        marginTop : 20
    },
    logo:{
        width:120,
        height:120
    },
    inputs:{
        flex:3,
        justifyContent:'space-evenly',
        width:"90%",
        paddingVertical:"5%",
        alignSelf:'center'
        
    },
    textInput:{
        
    },
    bottom:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
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

    },

})
export default authentication
