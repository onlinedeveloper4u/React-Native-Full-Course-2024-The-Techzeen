import { View, Text, Button } from 'react-native'
import React from 'react'
import First from './src/components/First'

const App = () => {
  return (
    <View>
      <Text style={ { fontSize : 30 } }>React Native Mobile APP Developer</Text>
      <Text style={ { fontSize : 30 } }>Muhammad Aqib</Text>
      <Button title='Press Here' />
      <First />
      <First />
      <First />
      <First />
    </View>
  )
}

export default App