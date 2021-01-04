import React ,{useState} from 'react'
import { View, Text, TextInput,Button ,StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native'
import {Input} from 'react-native-elements'
import background from '../../shared/images/background1.png'
import logo from '../../shared/images/loogo.png'
import axios from 'axios'
import {REACT_URL} from '../../constants/env.js'
const authentication = ({navigation}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const login =  async ()=>{
        
         const user = {email,password}
           
         try{
             
             const loginuser=  await axios.post(`${REACT_URL}auth/login`,user)
                navigation.navigate('HomeScreen')
             console.log("token"+loginuser.data)
         }catch(err){
             console.log("he error is:+"+err)
         }
    
     }

    return (
        <ImageBackground source={background} style={{flex:1}}>
            <View style={styles.container}>
                
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.imageStyle}></Image>
                    
                </View>
              
      
                <View style={styles.inputs}>
                    <Input style={styles.textInput} placeholder="Email" value={email} onChangeText ={(text)=> setemail(text)} />
                    <Input  style={styles.textInput} placeholder="Password" value={password} secureTextEntry={true} onChangeText ={(text)=> setpassword(text)}/>
                    <Button title="Login" color="#039b4f" onPress={login}/>
                </View>   
                <View style={styles.bottom}>
                    <Text style={{color:"#c6c6c6"}}>Don't have an account ?</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Register')}>
                        <Text title='register' style={{color:"#039b4f", fontWeight:'bold'}}>Register </Text>
                    </TouchableOpacity>
                </View>   

       
        
        </View>
        
        </ImageBackground>
        
    )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
       
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
        color:"#fff"
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
