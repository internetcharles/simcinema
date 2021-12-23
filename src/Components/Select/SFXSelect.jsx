import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setInfo } from '../../Redux/actions/movieActions';
import { sfx } from '../CreateMovie/movieData';
import SelectCard from '../Reusable/SelectCard';

const SFXSelect = ({ navigation }) => {
  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);
  const dispatch = useDispatch();

  const selectSFX = (id) => {
    if (sfx[id].price > budget) {
      Alert.alert(
        "Not enough money!",
        `You don't have enough money to hire ${sfx[id].name}!`
      ),
      [
        {
          text: "Okay"
        }
      ]
    } else if (sfx[id].status === 'None') {
      Alert.alert(
        "Are you sure?",
        "Are you sure you don't want to hire an visual effects house?",
        [
          {
            text: "Yes",
            onPress: () => submitSFX(id)
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
          `Would you like to hire ${sfx[id].name} for $${sfx[id.price]} million?`,
        [
          {
            text: "Yes",
            onPress: () => submitSFX(id)
          },
          {
            text: "No"
          }
        ]
      )
    }
  }

  const submitSFX = (id) => {
    dispatch(setBudget(budget - sfx[id].price));
    dispatch(setInfo({
      ...movieInfo,
      sfx: sfx[id].name
    }));
    navigation.navigate('audioselect')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget: {budget} million</Text>
      <Text>Select your SFX house:</Text>
      {
        sfx.map((sfx, idx) => (
          <View key={sfx.name}>
            <SelectCard selectName={sfx.name} price={sfx.price} status={sfx.status} onPress={() => selectSFX(idx)} />
          </View>
        ))
      }
    </SafeAreaView>
  )
}

export default SFXSelect

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
