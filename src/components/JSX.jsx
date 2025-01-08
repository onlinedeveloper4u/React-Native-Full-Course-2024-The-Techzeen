import { View, Text } from 'react-native'
import React from 'react'

const JSX = () => {
    let name = 'Aqib'
    const getAge = () => {
        return 27
    }
  return (
    <View>
      <Text style={ { fontSize : 30 } }>JSX</Text>
      <Text style={ { fontSize : 30 } }>{name}</Text>
      <Text style={ { fontSize : 30 } }>{5 + 3}</Text>
      <Text style={ { fontSize : 30 } }>{getAge()}</Text>
    </View>
  )
}

export default JSX