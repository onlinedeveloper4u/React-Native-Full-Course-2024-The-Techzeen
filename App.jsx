import './global.css'
import React from 'react'
import { View } from 'react-native'
import AnimatedCardFlip from './src/components/AnimatedCardFlip'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AnimatedCardFlip />
    </View>
  )
}

export default App