import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'

const MovieHome = () => {
  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget: ${budget} million</Text>
    </SafeAreaView>
  )
}

export default MovieHome

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
