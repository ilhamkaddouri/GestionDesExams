import React, {useContext} from 'react'
import { View, Text ,SafeAreaView,ImageBackground,StyleSheet} from 'react-native'
import background from '../../../shared/images/background1.png'
import {UserContext} from '../../../context/UserContext'

const Exams = () => {
  const user_data = useContext(UserContext)
  console.log(user_data.userData.user);

    return (
        <ImageBackground source={background} style={{flex:1}}>
            <View style={styles.container}>
                <Text>Exams ^^</Text>
            </View>
        </ImageBackground>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',

    }
})
export default Exams
