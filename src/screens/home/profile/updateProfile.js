import React,{useState,useContext,useEffect} from 'react'
import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import {Title ,Icon,Header,Left, Body  } from 'native-base';
import { Button,Input } from 'react-native-elements';

import { UserContext } from '../../../context/UserContext'
import {REACT_URL} from '../../../constants/env.js'
import img from '../../../shared/images/avatar.png'
import axios from "axios"
import * as Progress from 'react-native-progress'
const updateProfile = ({navigation}) => {
    const user_data = useContext(UserContext)

    const [fname,setNom]= useState()
    const [lname,setPrenom]= useState()
    const [email,setEmail]= useState()
    const [user,setUser] = useState();
    const [userId,setId] = useState(user_data.userData.user);
   
  
    const getUser= async ()=> {
       let user = await axios.get(`${REACT_URL}auth/user/`+userId).then(res=> 
            {  
                setUser(res.data) ;
                
            }).catch(err=>console.log(err))
    }

    const updateprofile=()=>{
        const newUser = {fname,lname,email}
        axios.put(`${REACT_URL}auth/updateuser/`+userId,newUser).then(res=> 
            {  
                setUser(newUser) ;
                navigation.navigate('Profile')
            }).catch(err=>console.log(err))
    }

    useEffect(() => {
       
        getUser();
    }, [])
    if(user){
    return (
        <View style={styles.main_container}>     
            <View style={styles.avatar}>
                <Image style={styles.image} source={img}/>
            </View> 
           
            <View style={styles.form}>
                
                <Input style={styles.metier} defaultValue={user.email} onChangeText={(value)=>setEmail(value)}/>
                <Input style={styles.metier} defaultValue={user.fname} onChangeText={(value)=> setNom(value)}/>
                 <Input style={styles.metier} defaultValue={user.lname} onChangeText={(value)=>{setPrenom(value)}}/>
            
            </View>
                    
            <View style={styles.req}>
                <TouchableOpacity  style= {{margin: 0, width: 140,alignItems:"center", backgroundColor : "#8174B3"}}
                         rounded onPress={()=>{updateprofile()}}><Text style={{fontSize:18, color:"white"}}>Submit</Text></TouchableOpacity>
            </View>
        </View>
    )
}
else{
    return(
        
       <View>
           <Button  
           title="Loading button" loading/>
       </View>
        
    )
}

}
const styles=StyleSheet.create({
    main_container:{
        flex: 1,
        
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    rating:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    services:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    button_container:{
        borderColor:"#72B48E",
        borderWidth:2,
        borderRadius:10,
        marginRight:7,
        marginLeft:7,
        marginTop:10,
        justifyContent: 'center'
    },
    button_title:{
        fontSize:10,
        fontWeight:"bold",
        color:"#e41b23"
    },
    image:{
        height:90,
        width:90,
        backgroundColor:"grey",
        borderRadius:200,
    },
    upside:{
        flex:6,
        flexDirection:"column"
    },
    downside:{
        flex:4,
        flexDirection:"row"
    },
    dev:{
        backgroundColor:"grey",
        height:1.2,
        marginRight:30,
        marginLeft:30
       
    },
    avatar:{
        flex:2,
        alignItems  :"center",
        marginTop: 40
        
    },
    infos:{
        flex:5,
        alignItems : "center"
    },
    req:{
        flex:5,
        marginTop : "10%",
        alignItems : 'center',
        justifyContent:"center"
        
    },
    name:{
        fontSize:19,
        fontWeight:"bold",
        marginBottom:2,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    metier:{
        color:"grey",
        fontSize : 20,
        padding :  4,
        marginLeft: 10
    },form: {
        padding: 30,
        flex: 1,
        marginLeft : 10
      },
})
export default updateProfile
