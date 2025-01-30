import 'react-native-gesture-handler'
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

const ChatScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Chats</Text>
  </View>
)
const StatusScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Status</Text>
  </View>
)
const CallsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Calls</Text>
  </View>
)

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarIndicatorStyle: {
            backgroundColor: '#007bff',
            height: 3
          },
          tabBarLabelStyle: {
            fontSize: 16
          }
        }}
      >
        <Tab.Screen name='Chats' component={ChatScreen} />
        <Tab.Screen name='Status' component={StatusScreen} />
        <Tab.Screen name='Calls' component={CallsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5'
  },
  text: {
    fontSize: 20
  }
})