import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [username, setUsername] = useState('')
  return (
    <View>
      <Text style={ { fontSize: 30 } }>InputText</Text>
      <Text style={ { fontSize: 30 } }>Username: {username}</Text>
      <TextInput
        style={ { fontSize: 20, borderWidth: 2, borderColor: 'green' } }
        value={username}
        placeholder='Enter Your Username'
        onChangeText={(data) => setUsername(data)}
      />
      <Button title="Clear" onPress={() => setUsername('')} />
    </View>
  )
}

export default InputText