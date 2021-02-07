import React,{useState} from 'react'
import { View, Text ,StyleSheet,Button} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import {Input} from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
const professeurHome = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
      
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const addExam = ()=>{

    }
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      setDate(date)
      hideDatePicker();
    };
    const [label,setLabel]=useState()
    const [language,setLanguage]= useState('exam label')
    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                    <Picker
                    selectedValue={language}
                    style={{height: 50, width: "80%"}}
                    onValueChange={(itemValue, itemIndex) =>
                        setLanguage(itemValue)
                    }>
                    <Picker.Item label="Base de donnes relatives" value="java" />
                    <Picker.Item label="Data warehouse" value="js" />
                    <Picker.Item label="Big data" value="js" />
                    <Picker.Item label="Web semantique" value="js" />
                    </Picker>
                    <View>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                    <Text>time </Text>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>
                    <View>
                        <Button onPress={addExam} title="add an exam" />
                    </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
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
