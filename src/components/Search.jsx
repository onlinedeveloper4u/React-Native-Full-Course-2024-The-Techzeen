import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const contacts = [
        { id: 1, name: 'Aqib'},
        { id: 2, name: 'Atif'},
        { id: 3, name: 'Asif'},
        { id: 4, name: 'Asim'},
        { id: 5, name: 'Ubaid'},
    ]
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    const renderItem = ({ item }) => (
        <View style={ styles.contactItem }>
            <Text style={ styles.contactName }>{item.name}</Text>
        </View>
    )
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Contact List</Text>
      <TextInput
        style={ styles.searchBar }
        placeholder='Search Contact...'
        placeholderTextColor='#888'
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={ styles.listContainer }
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f2fd',
        padding: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1e88e5',
        marginBottom: 20,
        textAlign: 'center'
    },
    searchBar: {
        height: 40,
        borderColor: '#90caf9',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    listContainer: {
        paddingBottom: 20
    },
    contactItem: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactName: {
        fontSize: 18,
        color: '#424242'
    }
})