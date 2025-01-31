// Firebase Authentication
import './global.css'
import React from 'react'
import { View } from 'react-native'
// import Register from './src/components/Register'
import Login from './src/components/Login'

const App = () => {
  return (
    <View className="flex-1">
      {/* <Register /> */}
      <Login />
    </View>
  )
}

export default App