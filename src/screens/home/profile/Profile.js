import React,{useState,useContext,useEffect} from 'react'
import { View, Text ,StyleSheet,Image, TouchableOpacity, Linking} from 'react-native'
import { Divider, Button,Icon } from 'react-native-elements';
import {Card} from 'react-native-shadow-cards';
import { UserContext } from '../../../context/UserContext'
import {REACT_URL} from '../../../constants/env.js'
import axios from "axios"
const Profile = () => {
    const user_data = useContext(UserContext)
    const id = user_data.userData.user;
    const [user,setUser] = useState()
    useEffect(() => {
        axios.get(`${REACT_URL}auth/user/`+id).then(res=> { setUser(res.data) ;console.log(res.data)}).catch(err=>console.log(err))
    }, [])
    return (
        <View>
          <Card style={styles.card} elevation={15} cornerRadius={15} onPress={() => displayProfile(user.key)}>
                    <View style={styles.avatar}>
                        <Image style={styles.image} />
                    </View>
                    {/* <TouchableOpacity style={styles.info} onPress={() => displayProfile(user.key,user.Rating)}>
                        <Text adjustsFontSizeToFit={true} style={styles.name}> {user.lname}</Text>
                        <Text style={styles.metier}>{user.email}</Text>
                        <View style={styles.distances}>
                            <Icon name="location" size={18} type="evilicon"/>
                            <Text style={styles.distance_txt}> Km loin</Text>
                        </View>
                    </TouchableOpacity> */}
                    <View style={styles.actions}>
                        <View style={styles.rating}>
                            <Icon color={"red"} size={20} name="star" type="feather"/>
                            <Text style={styles.rate}> 3</Text>
                        </View>
                    </View>
                </Card>
            
        </View>
    )
}
const styles=StyleSheet.create({

    card:{
        height:90,
        marginVertical:15,
        marginHorizontal:20,
        flexDirection:"row",
    },
    container:{
        marginHorizontal:20
    },
    avatar:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        height:70,
        width:70,
        borderRadius:100
    },
    info:{
        flex:2,
        marginVertical:12
    },
    actions:{
        flex:1,
        
    },
    name:{
        flex:2,
        fontSize:16,
        fontWeight:"bold",
        fontFamily:"sans-serif"
    },
    metier:{
        flex:1,
        fontSize:12,
        fontStyle:"italic",
        paddingLeft:5,
        color:"gray"
    },
    distances:{
        flex:1,
        flexDirection:"row",
        alignItems:"flex-end"
    },
    distance_txt:{
        fontSize:12,
        textAlign:"left",
        fontStyle:"italic",
        fontWeight:"bold",
        color:"gray"
    },
    rating:{
        flexDirection:"row",
        marginVertical:12,
        alignItems:"flex-end"
    },
    rate:{
        fontWeight:"bold",
        fontSize:16,
        color:"red"

    }


    
})
export default Profile
