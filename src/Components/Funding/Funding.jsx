import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import Button from '../Reusable/Button'
import InfoModal from '../Reusable/InfoModal'
import StudioCard from '../Reusable/StudioCard'
import { requestOffer, resetData, studios } from './studioData'

const Funding = () => {
  const [modal, showModal] = useState(false);
  const [offerInfo, setOfferInfo] = useState({});
  const movieInfo = useSelector((state) => state.info)

  useEffect(() => {
    resetData();
  }, [])

  const handleBid = (id) => {
    if(studios[id].offerRequested) {
      console.log("OFFER ALREADY REQUESTED")
    } else {
      requestOffer(id);
      setOfferInfo(studios[id]);
      showModal(true);
    }
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
