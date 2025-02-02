// Firebase Authentication
import './global.css'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <View className="text-center text-3xl">
      <Text>Splash Screen</Text>
    </View>
  )
}

export default App