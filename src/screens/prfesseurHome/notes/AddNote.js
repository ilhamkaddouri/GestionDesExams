import React ,{useEffect,useState,useContext} from 'react'

import { View, Text ,Picker} from 'react-native'
import axios from 'axios'
import REACT_URL from '../../../constants/env'
import ProfContext from '../../../context/ProfContext'
import {Button,Input} from 'react-native-elements'
const AddNote = ({props,navigation, route}) => {
    const [exams,setExams] = useState()
    const [note,setNote]= useState()
   
    const [name,setLanguage]= useState()
    const notes=[
        {
            id:1,
            nom:"lol"
        },{
            id:2,
            nom:"hey"
        }
    ]
    const addnote = ()=>{
        const idprof = route.params.idprof
        const iduser = route.params.iduser
  
      const notes={idprof, note,name,iduser}
      axios.post('http://192.168.43.239:8000/api/notes/add/'+idprof+'/'+name+'/'+iduser,notes).then(res=> console.log(res.data)).catch(err=>console.log(err))
    }
    useEffect(()=>{
        axios.get('http://192.168.43.239:8000/api/exams/profexams/'+route.params.idprof).then(res=> {setExams(res.data);console.log(res.data)}).catch(err => console.log(err))
    },[])
    // let serviceItems = exams.map( (s, i) => {
    //     return <Picker.Item key={i} value={s} label={s} />
    // });
    if(exams){
    return (
        <View>
            <Picker
                    selectedValue={name}
                    style={{height: 50, width: "80%"}}
                    onValueChange={(itemValue, itemIndex) =>
                        setLanguage(itemValue)
                    }>
                    {exams.map((exam, id) => 
                      {
                      return (
                      
                            <Picker.Item key={exam._id} value={exam._id} label={exam.name} />
                       
                   
                    
                        );
                      })
                }

                    </Picker>
                     <Input placeholder="Add a note" defaultValue={note} onChangeText={(value)=>setNote(value)}/>
                   <Button  style= {{marginTop: 0, width: 140, justifyContent: 'center',alignItems:"center",backgroundColor : "#8174B3"}} title="Add note" onPress={()=> addnote()}> Add note</Button>
         <View>
           <Text> Note affecte : {note}</Text> 
         </View>
        </View>
    )}else{
        return(
<View>
            <Button title="loading" loading></Button>
            
        </View>
        )
        
    }
}

export default AddNote


