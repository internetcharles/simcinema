import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import Button from '../Reusable/Button';

const InfoSummary = ({ navigation }) => {
  const movieInfo = useSelector((state) => state.info);
  const handleEdit = () => {
    navigation.navigate('movieinfo');
  };
  const handleSubmit = () => {
    navigation.navigate('fundingscreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Movie</Text>
      <Text style={styles.title}>{movieInfo.title}</Text>
      <Text style={styles.genre}>{movieInfo.genre}</Text>
      <Text style={styles.description}>{movieInfo.description ? movieInfo.description : "No description!"}</Text>
      <Button onPress={() => handleEdit()} label="Edit" />
      <Button onPress={() => handleSubmit()} label="Look for Funding!" />
    </SafeAreaView>
  )
}

export default InfoSummary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Avenir-Book'
  },
  title: {
    fontFamily: 'AvenirNext-BoldItalic',
    fontSize: 50,
  },
  genre: {
    fontFamily: 'Avenir-Book'
  },
  description: {
    fontFamily: 'Avenir-Book',
    fontSize: 25,
    marginVertical: 25,
  }
})
