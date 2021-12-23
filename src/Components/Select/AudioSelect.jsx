import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setInfo } from '../../Redux/actions/movieActions';
import { audio } from '../CreateMovie/movieData';
import SelectCard from '../Reusable/SelectCard';

const AudioSelect = ({ navigation }) => {
  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);
  const dispatch = useDispatch();

  const selectAudio = (id) => {
    if (audio[id].price > budget) {
      Alert.alert(
        "Not enough money!",
        `You don't have enough money to hire ${audio[id].name}!`
      ),
      [
        {
          text: "Okay"
        }
      ]
    } else if (audio[id].status === 'None') {
      Alert.alert(
        "Are you sure?",
        "Are you sure you don't want to hire an audio house?",
        [
          {
            text: "Yes",
            onPress: () => submitAudio(id)
          },
          {
            text: "No"
          }
        ]
      )
    }
    else {
      Alert.alert(
        "Are you sure?",
        `Would you like to hire ${audio[id].name} for $${audio[id].price} million?`
      ),
      [
        {
          text: "Yes",
          onPress: () => submitAudio(id)
        },
        {
          text: "No"
        }
      ]
    }
  }

  const submitAudio = (id) => {
    dispatch(setBudget(budget - audio[id].price));
    dispatch(setInfo({
      ...movieInfo,
      audio: audio[id].name
    }));
    navigation.navigate('filming')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget: {budget} million</Text>
      <Text>Select your audio house:</Text>
      {
        audio.map((composer, idx) => (
          <View key={composer.name}>
            <SelectCard selectName={composer.name} price={composer.price} status={composer.status} onPress={() => selectAudio(idx)} />
          </View>
        ))
      }
    </SafeAreaView>
  )
}

export default AudioSelect

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
