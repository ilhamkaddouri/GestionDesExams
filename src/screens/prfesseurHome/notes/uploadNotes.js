import FilePickerManager from 'react-native-file-picker';
import React,{useContext, useState, useEffect} from 'react'
import { View, Text, TextInput ,StyleSheet, FlatList, ImageBackground, Button} from 'react-native'
import {ProfContext} from '../../../context/ProfContext'
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'
import {REACT_URL} from '../../../constants/env'
import background from '../../../shared/images/background1.png'


const Item = ({ email,lname,fname }) => (
    <View style={styles.item}>
      <Text style={styles.note}>Name : {lname} {fname} </Text>

      <Text style={styles.note}>Email : {email}</Text>
      {/* <Text style={styles.note}>{date}</Text> */}
    {/* <Button title='Add mark'> </Button> */}
    <Text>
    Note :
    <TextInput autoCompleteType='cc-exp-year'> </TextInput>

    </Text>
    </View>
  );

const uploadNotes = () => {

    const prof_data = useContext(ProfContext)

    const [profdata,setProfData] = useState(prof_data.profData.prof);


    const renderItem = ({ item }) => (
        <Item 
        email={item.email}  
        date={item.date} 
        fname={item.fname}
        lname={item.lname}


        />
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
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',

    },
    lisview:{
        
        flex:2,
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
    width:'100%',
  },
  title: {
    fontSize: 19,
    color :'#97D4A8',
    fontWeight :'bold'
  },
})
export default uploadNotes
