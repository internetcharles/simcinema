import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text } from 'react-native'
import { View } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setInfo } from '../../Redux/actions/movieActions';
import { actors } from '../CreateMovie/movieData';
import SelectCard from '../Reusable/SelectCard';

const ActorSelect = ({ navigation }) => {
  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);
  const dispatch = useDispatch();

  const selectActor = (id) => {
    if (actors[id].price > budget) {
      Alert.alert(
        "Not enough money!",
        `You don't have enough money to cast ${actors[id].name}!`,
        [
          {
            text: "Okay"
          }
        ]
      )
    } 
    else if (actors[id].status === 'None') {
      Alert.alert(
        "Are you sure?",
        "Are you sure you don't want to cast a lead actor?",
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
        `Would you like to cast ${actors[id].name} in your film for $${actors[id].price} million?`,
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
    dispatch(setBudget(budget - actors[id].price));
    dispatch(setInfo({
      ...movieInfo,
      leadActor: actors[id].name
    }));
    navigation.navigate('composerselect')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget: {budget} million</Text>
      <Text>Select your lead actor:</Text>
      {
        actors.map((actor, idx) => (
          <View key={actor.name}>
            <SelectCard selectName={actor.name} price={actor.price} status={actor.status} onPress={() => selectActor(idx)} />
          </View>
        ))
      }
    </SafeAreaView>
  )
}

export default ActorSelect

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
