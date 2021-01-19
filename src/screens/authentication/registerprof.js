import React,{useState} from 'react'
import { View, Text, StyleSheet ,Image,Button,TouchableOpacity,TextInput,ImageBackground,Alert} from 'react-native'
import {Input} from 'react-native-elements'
import background from '../../shared/images/background1.png'
import logo from '../../shared/images/loogo.png'
import {REACT_URL} from '../../constants/env.js'
import axios from 'axios'
import {UserContext} from '../../context/UserContext'
const registerprof = ({navigation}) => {
    const [cnp,setlcnp] = useState('')
    const [lname,setlname] = useState('')
    const [fname,setfname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
     
    
     const register =async()=>{
        
        const user = {cnp,lname,fname,email,password}
        console.log(user)
        try{
            const loginuser=  await axios.post(`${REACT_URL}auth/register/prof`,user)
                navigation.navigate('Authentication')
            
        }catch(err){
            Alert.alert('Register error',err.response.data.msg,[
                {text : 'Close', onPress:()=>console.log('alert closed')}
            ])
            
        }

        
     }
    return (
        <ImageBackground source={background} style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.imageStyle}></Image>
            </View>
            <View style={styles.inputs}>
                    <Input style={styles.textInput} type='text' placeholder="Cnp" 
                        defaultValue={cnp}  
                        name='cnp' 
                        onChangeText={(text)=>setlcnp(text)}/>
                    <Input style={styles.textInput} type='text' placeholder="Nom" 
                        defaultValue={fname} 
                        name='fname' 
                        onChangeText={(e)=>setfname(e)}/>
                    <Input style={styles.textInput} type='text' placeholder="Prenom" 
                        defaultValue={lname} 
                        name='lname' 
                        onChangeText={(e)=>setlname(e)}/>
                    <Input style={styles.textInput} type='email' placeholder="Email" 
                        defaultValue={email} 
                        name='email' 
                        onChangeText={(e)=>setemail(e)}/>
                    <Input style={styles.textInput} type='password' placeholder="Password" secureTextEntry={true} 
                        name='password' 
                        defaultValue={password} 
                        onChangeText={(e)=>setpassword(e)}/>
                    <Button title="Login" color="#039b4f" style={{}} onPress={register}/>
                </View>   
                <View style={styles.bottom}>
                    <Text style={{color:"#c6c6c6"}}>Already have an account ?</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate('AuthProf')}>
                        <Text title='register' style={{color:"#039b4f", fontWeight:'bold'}}>Login </Text>
                    </TouchableOpacity>
                </View>   
        </View>
        </ImageBackground>
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
    textInput:{color:"#fff"},
    imageStyle:{
       
        width:'40%',
        height:'60%',
        flex : 1

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
export default registerprof
