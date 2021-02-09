import React, {useContext,useEffect, useState} from 'react'
import { View, Text ,SafeAreaView,ImageBackground,StyleSheet,FlatList} from 'react-native'
import background from '../../../shared/images/background1.png'
import {UserContext} from '../../../context/UserContext'
import axios from 'axios'
import {REACT_URL} from '../../../constants/env'

const Item = ({ name,date,time }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.note}><Text style={styles.text}>Date : </Text>{date}</Text>
    <Text style={styles.note}><Text style={styles.text}>Timing : </Text>{time}</Text>
  </View>
);
const Exams = () => {
  const user_data = useContext(UserContext)
    const [exams,setExams]= useState()
  const renderItem = ({ item }) => (
    <Item name={item.name}  date={item.date} time={item.time}/>
  );
  // console.log("user"+user_data.userData.user);
    useEffect(() => {
       axios.get(`${REACT_URL}exams/all`)
       .then(res=> 
        {setExams(res.data);console.log(exams)})
        .catch(err => console.log(err))
    }, [])

    return (
        <ImageBackground source={background} style={{flex:1}}>
            <View style={styles.container}>
                <Text>PlannedExams </Text>
                <FlatList     
                    data={exams}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
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
    fontSize: 19,
    color :'#97D4A8',
    fontWeight :'bold'
  },
  text:{
    color:"black"
  }
})
export default Exams
