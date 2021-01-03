import React,{useState} from 'react'
import { View, Text, StyleSheet ,Image,Button,TouchableOpacity,TextInput,ImageBackground} from 'react-native'
import {Input} from 'react-native-elements'
import background from '../../shared/images/background1.png'
import logo from '../../shared/images/loogo.png'
import axios from 'axios'
const register = ({navigation}) => {
    const [cne,setlcne] = useState('')
    const [lname,setlname] = useState('')
    const [fname,setfname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
     

    // login =()=>{
        
       
    //     console.log('hello' + ""+ fname+lname+email+password+ "cne "+cne)
    // }
    return (
        <ImageBackground source={background} style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.imageStyle}></Image>
            </View>
            <View style={styles.inputs}>
                    <Input style={styles.textInput} type='text' placeholder="Cne" 
                        defaultValue={cne}  
                        name='cne' 
                        onChangeText={(text)=>setlcne(text)}/>
                    <Input style={styles.textInput} type='text' placeholder="Nom" 
                        defaultValue={fname} 
                        name='fname' 
                        onChangeText={(e)=>setfname(e)}/>
                    <Input style={styles.textInput} type='text' placeholder="Prenom" 
                        defaultValue={lname} 
                        name='lname' 
                        onChangeText={(e)=>setlname(e)}/>
                    <Input style={styles.textInput} type='text' placeholder="Email" 
                        defaultValue={email} 
                        name='email' 
                        onChangeText={(e)=>setemail(e)}/>
                    <Input style={styles.textInput} type='password' placeholder="Password" secureTextEntry={true} 
                        name='password' 
                        defaultValue={password} 
                        onChangeText={(e)=>setpassword(e)}/>
                    <Button title="Login" color="#039b4f" style={{}} onPress={()=> navigation.navigate('AuthenticationStack')}/>
                </View>   
                <View style={styles.bottom}>
                    <Text style={{color:"#c6c6c6"}}>Already have an account ?</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Authentication')}>
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
