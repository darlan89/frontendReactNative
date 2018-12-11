import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto1}>Darlan<Text style={styles.texto02}> Cardoso</Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto1: {
    color: '#fff',
    fontSize: 30,
  },

  texto02: {
    color: 'yellow',
    fontSize: 40,
  }
})