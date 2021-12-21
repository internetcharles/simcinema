import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setBudget, setInfo } from '../../Redux/actions/movieActions'
import Button from '../Reusable/Button'
import InfoModal from '../Reusable/InfoModal'
import StudioCard from '../Reusable/StudioCard'
import { requestOffer, resetData, studios } from './studioData'

const Funding = ({ navigation }) => {
  const [modal, showModal] = useState(false);
  const [offerInfo, setOfferInfo] = useState({});
  const movieInfo = useSelector((state) => state.info)

  const dispatch = useDispatch();

  useEffect(() => {
    resetData();
  }, [])

  const handleBid = (id) => {
    if(studios[id].offerRequested) {
      setOfferInfo(studios[id]);
      Alert.alert(
        "Are you sure?",
        `Do you want to accept the offer from ${studios[id].companyName} for $${studios[id].offer} million?`,
        [
          {
            text: "Yes",
            onPress: () => finalizeOffer()
          },
          {
            text: "No"
          }
        ]
      )
    } else {
      requestOffer(id);
      setOfferInfo(studios[id]);
      showModal(true);
    }
  }

  const finalizeOffer = () => {
    dispatch(setBudget(offerInfo.offer));
    dispatch(setInfo({
      ...movieInfo,
      companyName: offerInfo.companyName,
    }))
    navigation.navigate('actorselect');
  }

  return (
    <SafeAreaView style={styles.container}>
      {modal ? <InfoModal setModalVisible={showModal} modalVisible={modal} offerInfo={offerInfo} /> : null}
      <View>
        <Text>Fund your Film!</Text>
        <Text>{movieInfo.title}</Text>
      </View>
      <View>
        <StudioCard companyName={studios[0].companyName} offer={studios[0].offer} onPress={() => handleBid(0)} />
        <StudioCard companyName={studios[1].companyName} offer={studios[1].offer} onPress={() => handleBid(1)} />
        <StudioCard companyName={studios[2].companyName} offer={studios[2].offer} onPress={() => handleBid(2)} />
        <StudioCard companyName={studios[3].companyName} offer={studios[3].offer} onPress={() => handleBid(3)} />
        <StudioCard companyName={studios[4].companyName} offer={studios[4].offer} onPress={() => handleBid(4)} />
        <StudioCard companyName={studios[5].companyName} offer={studios[5].offer} onPress={() => handleBid(5)} />
        <StudioCard companyName={studios[6].companyName} offer={studios[6].offer} onPress={() => handleBid(6)} />
      </View>
      <Button onPress={() => resetData()} label="RESET" />
    </SafeAreaView>
  )
}

export default Funding

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
