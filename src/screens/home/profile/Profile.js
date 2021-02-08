import React,{useState,useContext,useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button,Title ,Icon,Header,Left, Body  } from 'native-base';
import { UserContext } from '../../../context/UserContext'
import {REACT_URL} from '../../../constants/env.js'
import img from '../../../shared/images/avatar.png'
import axios from "axios"
const Profile = () => {
    const user_data = useContext(UserContext)

    // const id = user_data.userData.user;
    const [user,setUser] = useState();
    const [userId,setId] = useState(user_data.userData.user);
   
    // console.log(userId);

    const getUser = async ()=> {
       let user = await axios.get(`${REACT_URL}auth/user/`+userId).then(res=> 
            {  
                setUser(res.data) ;
                console.log(res.data)
            }).catch(err=>console.log(err))
        
        console.log(user);
    }

    useEffect(() => {
        // setId(user_data.userData.user);
        // // console.log(userId);

        //  axios.get(`${REACT_URL}auth/user/`+userId).then(res=> 
        //     {  
        //         setUser(res.data) ;
                
                
        //     }).catch(err=>console.log(err))
        // // console.log(stg);
        getUser();
    }, [])
    if(user){
    return (
        <View style={styles.main_container}>     
            <View style={styles.avatar}>
                <Image style={styles.image} source={img}/>
            </View> 
            <View style={{alignItems:'center'}}>
                <Text style={styles.name}>name</Text>
            </View>
            <View style={styles.form}>
                
            <Text style={styles.metier}>CNE : {user.cne}</Text>
                <Text style={styles.metier}>Email : {user.email}</Text>
                <Text style={styles.metier}>First Name : {user.fname}</Text> 
                 <Text style={styles.metier}>Last Name : {user.lname}</Text>
            
            </View>
                    
            <View style={styles.req}>
                <Button  style= {{marginTop: 40, width: 140, justifyContent: 'center', backgroundColor : "#e41b23"}}
                         rounded><Text style={{fontSize:18, color:"white"}}>Modifier</Text></Button>
            </View>
        </View>
    )
}
else{
    return(
        <View>
            <Text>Waiting</Text>
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
        fontSize : 16,
        padding :  4,
        marginLeft: 10
    },form: {
        padding: 20,
        flex: 1,
        marginLeft : 10
      },
})
export default Profile
