import FilePickerManager from 'react-native-file-picker';
import React,{useContext, useState, useEffect} from 'react'
import { Input } from 'react-native-elements';

import { View,Text, TextInput ,StyleSheet, FlatList, ImageBackground, Button} from 'react-native'
import {ProfContext} from '../../../context/ProfContext'
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'
import {REACT_URL} from '../../../constants/env'
import background from '../../../shared/images/background1.png'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Item = ({ email,lname,fname }) => (
    <TouchableOpacity style={styles.item}>
     
      <Text style={styles.title_name}>{lname} {fname}  </Text>
    
    {/* <Input style={styles.metier} disabled/> */}
    
    </TouchableOpacity>
  );

const uploadNotes = ({navigation}) => {

    const prof_data = useContext(ProfContext)

    const [profdata,setProfData] = useState(prof_data.profData.prof);


    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={()=>navigation.navigate("Addnote",{iduser:item._id, idprof:profdata})}> 
        <Item 
      
    
        fname={item.fname}
        lname={item.lname}
        />
        </TouchableOpacity>
      );

    // const user_data = useContext(UserContext)
    const [users,setUsers]= useState()
    
    const getUsers = async ()=> {
        await axios.get(`${REACT_URL}auth/all`).then(res=> 
             {  
                 setUsers(res.data) ;
                 console.log(res.data);
             }).catch(err=>console.log(err))
         
        //  console.log(user);
     }

     
  // console.log("user"+user_data.userData.user);
    useEffect(() => {
       console.log("Hello")
       getUsers();
    }, [])

    
    return (
    
        <ImageBackground source={background} style={{flex:1}}>

    <View style={styles.container}> 
        <FlatList     
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    extraData={profdata}
        />
                
        </View>
        </ImageBackground>
    )
    
}


const styles= StyleSheet.create({
  container: {
      flex: 1,
      
    },
    lisview:{
      
          flex:3,
          marginTop:"8%",
       
      },
    hometitle:{
        textAlign : "center",
        fontSize : 18,
        color : "#fff"
    },
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 13,
      color :'#97D4A8',
      fontWeight :'bold'
    },
    title_name:{
      fontSize: 18,
      color: '#97D4A8',
      textAlign: 'center'
    },

    text:{
        color:"black",
        fontWeight:'bold'
    },
    metier:{
      color:"grey",
      fontSize : 20,
      padding :  4,
      marginLeft: 10
  }
})
export default uploadNotes
