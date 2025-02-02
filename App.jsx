// Firebase Authentication
import './global.css'
import React from 'react'
import UserCRUD from './src/components/UserCRUD'
import { View } from 'react-native'

const App = () => {
  return (
    <View className="flex-1">
      <UserCRUD />
    </View>
  )
}

export default App