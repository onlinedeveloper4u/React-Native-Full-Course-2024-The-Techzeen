import './global.css'
import React from 'react'
import { View } from 'react-native'
import Register from './src/components/Register'

const App = () => {
  return (
    <View className="flex-1">
      <Register />
    </View>
  )
}

export default App