import { View } from 'react-native'
import React, { createContext, useState } from 'react'
import FirstChild from './FirstChild'

// Create, Provide and Use Context

export const CounterContext = createContext() // Created Context

const Parent = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
  return (
    // Provided Context
    <CounterContext.Provider value={{count, incrementCount}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FirstChild />
        </View>
    </CounterContext.Provider>
  )
}

export default Parent