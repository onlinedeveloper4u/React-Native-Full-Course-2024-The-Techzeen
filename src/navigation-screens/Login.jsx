import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
  return (
    <View>
      <TextInput
        placeholder='Enter username'
        onChangeText={(value) => setUsername(value)}
      />
      <Button
        title='Login'
        // onPress={() => navigation.navigate('About',  { username: 'Aqib', age: 27 }) }
        onPress={() => navigation.navigate('About',  { username }) }
      />
    </View>
  )
}

export default Login