import { View, Text, Button } from 'react-native'
import React from 'react'

const OnPress = () => {
    let name = 'Aqib'
    const getName = () => {
        name = 'Huzaifa'
        console.warn('Name: ', name)
    }
  return (
    <View>
      <Text style={ { fontSize : 30 } }>{name}</Text>
      <Button title="Press" onPress={getName} />
      {/* <Button title="Press" onPress={() => getName('Aqib')} /> */}
    </View>
  )
}

export default OnPress