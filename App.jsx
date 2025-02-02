// Firebase Authentication
import './global.css'
import React from 'react'
import Login from './src/components/Login'
import Register from './src/components/Register'
import ForgotPassword from './src/components/ForgotPassword'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App