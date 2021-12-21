import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

const ActorSelect = () => {
  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget: {budget} million</Text>
      <Text>Select your lead actor:</Text>
    </SafeAreaView>
  )
}

export default ActorSelect

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
