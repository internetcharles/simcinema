import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import AdvertisingModal from '../Filming/AdvertisingModal';
import Button from '../Reusable/Button';
import HypeSectionButton from '../Reusable/HypeSectionButton';
import ReviewSectionButton from '../Reusable/ReviewSectionButton';

const MovieHome = () => {
  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);
  const adInfo = useSelector(state => state.adInfo);

  const [showAdvertisingModal, setShowAdvertisingModal] = useState(false);
  const [advertisingInfo, setAdvertisingInfo] = useState(adInfo);
  const [theaters, setTheaters] = useState(adInfo.hype * 1000);

  const [week, setWeek] = useState(0);

  const releaseFilm = () => {
    console.log('Film Released');
    setWeek(1);
  }

  const advanceWeek = () => {
    setTheaters(Math.round(theaters / (advertisingInfo.hype / 2)));
    setAdvertisingInfo({
      hype: advertisingInfo.hype - 1,
      activeAds: {
        ...advertisingInfo.activeAds
      }
    })
    setWeek(week + 1);
  }
  
  const buyTvCommercials = () => {
    if (budget >= 6) {
      setAdvertisingInfo({
        hype: advertisingInfo.hype + 10,
        activeAds: {
          ...advertisingInfo.activeAds,
          tvCommercials: advertisingInfo.activeAds.tvCommercials + 6,
        }
      })
    }
  }

  const buyMovieTrailers = () => {
    if (budget >= 4) {
      setAdvertisingInfo({
        hype: advertisingInfo.hype + 7,
        activeAds: {
          ...advertisingInfo.activeAds,
          movieTrailers: advertisingInfo.activeAds.movieTrailers + 4,
        }
      })
    }
  }

  const buyMagazineNewspaperAds = () => {
    if (budget >= 2) {
      setAdvertisingInfo({
        hype: advertisingInfo.hype + 3,
        activeAds: {
          ...advertisingInfo.activeAds,
          magazineNewspaperAds: advertisingInfo.activeAds.magazineNewspaperAds + 2,
        }
      })
    }
  }

  const buyPosters = () => {
    if (budget >= 1) {
      setAdvertisingInfo({
        hype: advertisingInfo.hype + 1,
        activeAds: {
          ...advertisingInfo.activeAds,
          posters: advertisingInfo.activeAds.posters + 1,
        }
      })
    }
    console.log(advertisingInfo);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget: ${budget} million</Text>
      {
        week > 0 ? ( 
        <>
          <Text>Week {week}</Text>
          <Text>Theaters: {theaters}</Text>
          <ReviewSectionButton leftText='Reviews' rightText='1' />
          <HypeSectionButton leftText='Advertising' onClick={() => setShowAdvertisingModal(true)} rightText={advertisingInfo.hype} />
          <Button label='Advance Week' onPress={() => advanceWeek()} />
        </>
        )
        : ( <>
          <Text>Theaters: {theaters}</Text>
          <Button label='Release Film' onPress={() => releaseFilm()} /> 
        </>
        )
      }
      {
        showAdvertisingModal ? <AdvertisingModal
          setModalVisible={setShowAdvertisingModal}
          modalVisible={showAdvertisingModal}
          advertisingInfo={advertisingInfo}
          buyTvCommercials={buyTvCommercials}
          buyMagazineNewspaperAds={buyMagazineNewspaperAds}
          buyPosters={buyPosters}
          buyMovieTrailers={buyMovieTrailers}
          budget={budget}
          />
          : null
      }
      {
        
      }
    </SafeAreaView>
  )
}

export default MovieHome

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
