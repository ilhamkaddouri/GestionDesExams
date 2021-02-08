import React,{useContext, useState} from 'react'
import { StyleSheet, View, Text, Button, Image, TextInput } from 'react-native'
import {ProfContext} from '../../../context/ProfContext'

import DocumentPicker from 'expo-document-picker';

const uploadNotes = () => {

    const prof_data = useContext(ProfContext)

    const [uploadProgress,setUploadProgress] = useState(0);
    const [response, setResponse] = useState('You should see your response here')
    const[prof, setProf] = useState(prof_data.profData.prof) 

    const photoUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1c/Image_du_Maroc_3.jpg"

    // const res = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.allFiles],
    // });
    // this.setState({ singleFile: res });
    
    const onClickUpload = () => {



    }

    /**
     * Prof Info : ID 
     */
    // console.log(prof_data.profData.prof)

    return (
        <View style={styles.container}>
        <Image style={{height:200, width:400}} source={{url: photoUrl}}/>
           <Button title={'Upload the file'}></Button>
            <Text>Here we can upload the marks</Text>
            <TextInput
            style={{
                height: 100, 
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            value={prof}></TextInput>
        </View>
    )
};

const styles = StyleSheet.create({
container : {
    flex: 1, 
    marginTop: 100, 
    alignItems: 'center',
},
});

export default uploadNotes
