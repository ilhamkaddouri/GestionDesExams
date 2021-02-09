import React,{useState, useContext} from 'react'
import { View, Text ,StyleSheet,Button,Picker, TouchableOpacity} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import {ProfContext} from '../../../context/ProfContext'
import {Input} from 'react-native-elements'
import moment from "moment"
import axios from "axios"
import REACT_URL from '../../../constants/env'
const professeurHome = () => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
   
    const [name,setLanguage]= useState('exam label')
        //*** Context -> PROF */
    const prof_data = useContext(ProfContext)
   
    const [profId, setId] = useState(prof_data.profData.prof)
  
  
    
     const addExam =  ()=>{
        const exam= {
            prof_data,
             name,
            time,
             date
        }
        
              axios.post('http://192.168.43.239:8000/api/exams/exam',exam,{
                headers: { "token": prof_data.profData.token },
              }).then(res=>{console.log(res.data)}).catch(err=> console.log(err))
            
        
       

    }
    const showDatePicker = () => {
       setDatePickerVisibility(true);
     };
  
     const hideDatePicker = () => {
       setDatePickerVisibility(false);
    };
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
   
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
     };
  
        const handleConfirm = (date) => {
            setDate( moment(date).format("DD-MM-YYYY").toString())
            hideDatePicker();
        };
        const handleTimeConfirm = (date) => {
          
           setTime(moment(date).format("HH:MM").toString())
           
            hideTimePicker();
        };
    
    return (
        <View style={styles.container}>
             <View style={styles.inputs}>
                    <Picker
                    selectedValue={name}
                    style={{height: 50, width: "80%"}}
                    onValueChange={(itemValue, itemIndex) =>
                        setLanguage(itemValue)
                    }>
                    <Picker.Item label="Base de donnes relatives" value="Base de donnes relatives" />
                    <Picker.Item label="Data warehouse" value="Data warehouse" />
                    <Picker.Item label="Big data" value="Big data" />
                    <Picker.Item label="Web semantique" value="Web semantique" />
                    </Picker>
                    <View>
                    <TouchableOpacity onPress={()=>showDatePicker()}>
                        <Input value={date} placeholder="Date of exam" defaultValue={date} disabled />
                    </TouchableOpacity>
                    
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <TouchableOpacity onPress={()=>showTimePicker()}>
                     <Input placeholder="Time of Exam" defaultValue={time} disabled/>
                     </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                    />
                  
                </View>
                    <View>
                        <Button onPress={addExam} title="add an exam" />
                    </View>
     
            </View>
        </View>
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
    textInput:{color:"#fff"},
    imageStyle:{
       
        width:'40%',
        height:'60%',
        flex : 1

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
export default professeurHome
