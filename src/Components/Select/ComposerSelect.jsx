import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setInfo } from '../../Redux/actions/movieActions';
import { composers } from '../CreateMovie/movieData';
import SelectCard from '../Reusable/SelectCard';

const ComposerSelect = ({ navigation }) => {
  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);
  const dispatch = useDispatch();

  const selectComposer = (id) => {
    if (composers[id].price > budget) {
      Alert.alert(
        "Not enough money!",
        `You don't have enough money to hire ${composers[id].name}!`
      ),
      [
        {
          text: "Okay"
        }
      ]
    } else if (composers[id].status === 'None') {
      Alert.alert(
        "Are you sure?",
        "Are you sure you don't want to hire a composer?",
        [
          {
            text: "Yes",
            onPress: () => submitComposer(id)
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
        `Would you like to hire ${composers[id].name} for $${composers[id].price} million?`
      ),
      [
        {
          text: "Yes",
          onPress: () => submitComposer(id)
        },
        {
          text: "No"
        }
      ]
    }
  }

  const submitComposer = (id) => {
    dispatch(setBudget(budget - composers[id].price));
    dispatch(setInfo({
      ...movieInfo,
      composer: composers[id].name
    }));
    navigation.navigate('sfxselect')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget: {budget} million</Text>
      <Text>Select your composer:</Text>
      {
        composers.map((composer, idx) => (
          <View key={composer.name}>
            <SelectCard selectName={composer.name} price={composer.price} status={composer.status} onPress={() => selectComposer(idx)} />
          </View>
        ))
      }
    </SafeAreaView>
  )
}

export default ComposerSelect

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
