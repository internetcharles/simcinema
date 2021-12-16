import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Button from '../Reusable/Button'
import PropTypes from 'prop-types';

const Home = ({ navigation }) => {

  const handleStart = () => {
    navigation.navigate('movieinfo')
  }

  return (
    <SafeAreaView>
      <Text>SimCinema</Text>
      <Button onPress={() => handleStart()} label="New Movie" /> 
    </SafeAreaView>
  )
}

export default Home

Home.propTypes = {
  navigation: PropTypes.object,
}