import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
    const [name, setName] = useState('Aqib')
    const updateName = () => {
        setName('Ali')
    }
  return (
    <View>
      <Text style={ { fontSize : 30 } }>UseStateHook</Text>
      <Text style={ { fontSize : 30 } }>Name: {name}</Text>
      {/* <Button title='Press' onPress={() => setName('Huzaifa')} /> */}
      <Button title='Press' onPress={updateName} />
    </View>
  )
}

export default UseStateHook