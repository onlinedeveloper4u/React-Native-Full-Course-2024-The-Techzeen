import 'react-native-gesture-handler'
import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

const HomeScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </View>
)
const ProfileScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </View>
)
const SettingsScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
      <Text style={styles.title}>Settings Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </View>
)

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#e6e6e6',
            width: 240
          },
          drawerLabelStyle: {
            fontSize: 18,
            color: '#333'
          },
          headerStyle: {
            backgroundColor: '#6200EE'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Profile' component={ProfileScreen} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  }
})