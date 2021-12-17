import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import StudioCard from '../Reusable/StudioCard'
import { studios } from './studioData'

const Funding = () => {
  const movieInfo = useSelector((state) => state.info)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Fund your Film!</Text>
        <Text>{movieInfo.title}</Text>
      </View>
      <View>
        <StudioCard companyName={studios[0].companyName} offer={studios[0].offer} />
      </View>
    </SafeAreaView>
  )
}

export default Funding

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
