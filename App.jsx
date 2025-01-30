import './global.css'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import One from './src/components/One'
import MyLogin from './src/components/MyLogin'

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <MyLogin />
    </SafeAreaView>
  )
}

export default App