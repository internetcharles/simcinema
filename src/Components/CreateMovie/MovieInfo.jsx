import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-web'

const MovieInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
    </SafeAreaView>
  )
}

export default MovieInfo

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
