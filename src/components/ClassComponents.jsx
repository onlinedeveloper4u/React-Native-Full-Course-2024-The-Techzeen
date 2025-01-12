import React, { Component } from 'react'
import { View, Text } from 'react-native'
import SecondClass from './SecondClass'

class ClassComponents extends Component {
    render() {
        const age = 22
        return (
            <View>
                <Text style={ { fontSize: 30 } }>Class Components</Text>
                <SecondClass data={age} />
            </View>
        )
    }
}

export default ClassComponents