import React,{useState,useContext,useEffect} from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { Title ,Icon,Header,Left, Body  } from 'native-base';
import { Button } from 'react-native-elements';
import { UserContext } from '../../../context/UserContext'
import {REACT_URL} from '../../../constants/env.js'
import img from '../../../shared/images/avatar.png'
import axios from "axios"
const Profile = ({navigation}) => {
    const user_data = useContext(UserContext)

 
    const [user,setUser] = useState();
    const [userId,setId] = useState(user_data.userData.user);
   
  

    const getUser = async ()=> {
       let user = await axios.get(`${REACT_URL}auth/user/`+userId).then(res=> 
            {  
                setUser(res.data) ;
               
            }).catch(err=>console.log(err))
        
       
    }

    const updateprofile=()=>{
        navigation.navigate('UProfile')
    }
    useEffect(() => {
     
        getUser();
    }, [user])
    if(user){
    return (
        <View style={styles.main_container}>     
            <View style={styles.avatar}>
                <Image style={styles.image} source={img}/>
            </View> 
            <View style={{alignItems:'center'}}>
                <Text style={styles.name}>{user.fname} {user.lname}</Text>
            </View>
            <View style={styles.form}>
                
               
            <Text style={styles.text}>CNE : <Text style={styles.metier}>  {user.cne}</Text></Text>
                <Text style={styles.text}>Email : <Text style={styles.metier}>  {user.email}</Text></Text>
                <Text style={styles.text}>First Name : <Text style={styles.metier}>  {user.fname}</Text></Text> 
                 <Text style={styles.text}>Last Name : <Text style={styles.metier}>  {user.lname}</Text></Text>
                 <Text style={styles.text}>Status: <Text style={styles.metier}>  Student </Text></Text>
            
            </View>
                    
            <View style={styles.req}>
                <TouchableOpacity  style= {{marginTop: 0, width: 140, justifyContent: 'center',alignItems:"center",backgroundColor : "#8174B3"}}
                         rounded onPress={()=>updateprofile()}><Text style={{fontSize:18, color:"white"}}>Update</Text></TouchableOpacity>
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
        marginTop : 70,
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
        fontSize : 18,
        padding :  4,
        marginLeft: 10
    },
    text:{
        color:"black",
        fontSize : 18,
        padding :  4,
        marginLeft: 10
    },form: {
        padding: 20,
        flex: 1,
        marginLeft : 10
      },
})
export default Profile
