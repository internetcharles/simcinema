import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setInfo } from '../../Redux/actions/movieActions';
import { actresses } from '../CreateMovie/movieData';
import SelectCard from '../Reusable/SelectCard';

const ActressSelect = ({ navigation }) => {
  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);
  const dispatch = useDispatch();

  const selectActor = (id) => {
    if (actresses[id].price > budget) {
      Alert.alert(
        "Not enough money!",
        `You don't have enough money to cast ${actresses[id].name}!`
      ),
      [
        {
          text: "Okay"
        }
      ]
    } else if (actresses[id].status === 'None') {
      Alert.alert(
        "Are you sure?",
        "Are you sure you don't want to cast a lead actress?",
        [
          {
            text: "Yes",
            onPress: () => submitActor(id)
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
          `Would you like to cast ${actresses[id].name} in your film for $${actresses[id].price} million?`,
        [
          {
            text: "Yes",
            onPress: () => submitActor(id)
          },
          {
            text: "No"
          }
        ]
      )
    }
  }

  const submitActor = (id) => {
    dispatch(setBudget(budget - actresses[id].price));
    dispatch(setInfo({
      ...movieInfo,
      leadActress: actresses[id].name
    }));
    navigation.navigate('composerselect')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget: {budget} million</Text>
      <Text>Select your lead actress:</Text>
      {
        actresses.map((actor, idx) => (
          <View key={actor.name}>
            <SelectCard selectName={actor.name} price={actor.price} status={actor.status} onPress={() => selectActor(idx)} />
          </View>
        ))
      }
    </SafeAreaView>
  )
}

export default ActressSelect

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
