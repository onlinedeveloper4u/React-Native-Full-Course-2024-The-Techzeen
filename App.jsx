import React from 'react'
import { View } from 'react-native'
import Parent from './src/components/Parent'

const App = () => {
  return (
    <View style={ { flex: 1 } }>
      <Parent />
  </View>
  )
}

export default App