import React,{useContext,useState,useEffect} from 'react'
import { View, Text, FlatList, ImageBackground ,StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';
import {ProfContext} from '../../../context/ProfContext'
import background from '../../../shared/images/background.png'
import axios from 'axios'
import REACT_URL from '../../../constants/env'
const Item = ({ name,date,time }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.note}><Text style={styles.text}>Date : </Text>{date}</Text>
      <Text style={styles.note}><Text style={styles.text}>Timing : </Text>{time}</Text>
    </View>
  );
const exams = () => {
    const prof_data = useContext(ProfContext)
    
    const [profId,setId] = useState(prof_data.profData.prof);
    
    const [exams,setExams]= useState()
    const renderItem = ({ item }) => (
      <Item name={item.name}  date={item.date} time={item.time}/>
    );
    const getUser =  ()=> {
        
         axios.get('http://192.168.43.239:8000/api/exams/profexams/'+profId).then(res=> {setExams(res.data);console.log(res.data)}).catch(err => console.log(err))

     }
    useEffect(  () => {
         getUser()
     }, [])
     if(exams){
    return (
        <ImageBackground source={background} style={{flex:1}}>
        <View style={styles.container}>
            <Text>All exams</Text>
            <FlatList
                
                data={exams}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    </ImageBackground>
    )}
    else{
        return(
        
            <View>
                <Button title="Loading button"  loading/>
            </View>
             
         )
    }
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
export default exams
