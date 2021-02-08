import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import {ProfContext} from '../../../context/ProfContext'

const exams = () => {
    const prof_data = useContext(ProfContext)
    // console.log(prof_data.profData.prof)

    return (
        <View>
            <Text>Exams planned</Text>
        </View>
    )
}

export default exams
