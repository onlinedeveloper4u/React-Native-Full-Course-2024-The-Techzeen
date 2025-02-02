// Firebase Authentication
import './global.css'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import SwitchUI from './src/components/SwitchUI'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <View className="flex-1">
      <SwitchUI />
    </View>
  )
}

export default App