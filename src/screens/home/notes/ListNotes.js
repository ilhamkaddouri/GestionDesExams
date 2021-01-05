import React from 'react'
import { View, Text ,StyleSheet,FlatList,ImageBackground} from 'react-native'
import background from '../../../shared/images/background1.png'
const Notes = [
    { id : 1 , Label : 'Big Data' , note : '18' },
    { id :  2, Label : 'Genie logiciel' , note : '17' },
    { id : 3 , Label : 'Qualite logiciel' , note : '17' },
    { id : 4 , Label : 'Ps5' , note : '19' },
    
 ]
 const Item = ({ label,note }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{label}</Text>
      <Text style={styles.note}>{note}</Text>
    </View>
  );
const ListNotes = () => {
    const renderItem = ({ item }) => (
        <Item label={item.Label}  note={item.note} />
      );
    return (
        <ImageBackground source={background} style={{flex:1}}>
        <View style={styles.lisview}>
           
            
                <FlatList
                    
                    data={Notes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
              
            
        </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
  
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
})
export default ListNotes
