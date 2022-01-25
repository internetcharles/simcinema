import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import Button from '../Reusable/Button'
import SectionButton from '../Reusable/SectionButton'

const AdvertisingModal = ({ 
    setModalVisible, 
    modalVisible, 
    advertisingInfo,
    budget,
    buyTvCommercials,
    buyMovieTrailers,
    buyMagazineNewspaperAds,
    buyPosters,
  }) => {
    const { hype, activeAds } = advertisingInfo;

  return (
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}>
          <View style={styles.centerView}>
            <Text>Advertising</Text>
            <Text>Budget: ${budget} million</Text>
            <Text>Hype: {hype}</Text>
            <SectionButton 
              leftText="TV Commercials" 
              rightText={`$${activeAds.tvCommercials} million`} 
              onPress={() => buyTvCommercials()} 
              />
            <SectionButton 
              leftText="Movie Trailers" 
              rightText={`$${activeAds.movieTrailers} million`} 
              onPress={() => buyMovieTrailers()} 
              />
            <SectionButton 
              leftText="Magazine/Newspaper Ads" 
              rightText={`$${activeAds.magazineNewspaperAds} million`} 
              onPress={() => buyMagazineNewspaperAds()} 
              />
            <SectionButton 
              leftText="Posters" 
              rightText={`$${activeAds.posters} million`} 
              onPress={() => buyPosters()} 
              />
            <Button label='Close' onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
  )
}


export default AdvertisingModal

const styles = StyleSheet.create({
  centerView: {
    backgroundColor: '#FFFFFF'
  }
})
