import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setAdvertising } from '../../Redux/actions/movieActions';
import HypeSectionButton from '../Reusable/HypeSectionButton';
import SectionButton from '../Reusable/SectionButton';
import AdvertisingModal from './AdvertisingModal';
import MovieInfoModal from './MovieInfoModal';

const FilmingHome = ({ navigation }) => {
  const dispatch = useDispatch();

  const movieInfo = useSelector(state => state.info);
  const budget = useSelector(state => state.budget);

  const [advertisingInfo, setAdvertisingInfo] = useState({
    hype: 0,
    activeAds: {
      tvCommercials: 0,
      movieTrailers: 0,
      magazineNewspaperAds: 0,
      posters: 0,
    }
  })
  const [showAdvertising, setShowAdvertising] = useState(false);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [movieProgress, setMovieProgress] = useState(0);

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

  const advanceOneWeek = () => {
    setMovieProgress(movieProgress + 20);
    if (advertisingInfo.hype > 0) {
      setAdvertisingInfo({
        ...advertisingInfo,
        hype: advertisingInfo.hype - 1,
      })
    }
  }

  const releaseFilm = () => {
    dispatch(setAdvertising(advertisingInfo));
    navigation.navigate('moviehome')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{movieInfo.title}</Text>
      <Text>Budget Remaining: ${budget} million</Text>
      <Text>Filming Progress: {movieProgress}%</Text>
      <SectionButton leftText='Movie Info' onPress={() => setShowMovieModal(true)} />
      <HypeSectionButton leftText='Advertising' rightText={advertisingInfo.hype} onPress={() => setShowAdvertising(true)} />
      {
        movieProgress < 100 ? <SectionButton leftText='Advance One Week' onPress={() => advanceOneWeek()} />
        : <SectionButton leftText='Release Film' onPress={() => releaseFilm()} />
      }
      {
        showMovieModal ? <MovieInfoModal
        movieInfo={movieInfo}
        movieModalVisible={showMovieModal}
        setMovieModalVisible={setShowMovieModal}
        />
        : null
      }
      {
        showAdvertising ? <AdvertisingModal
        setModalVisible={setShowAdvertising} 
        modalVisible={showAdvertising} 
        advertisingInfo={advertisingInfo}
        buyTvCommercials={buyTvCommercials}
        buyMagazineNewspaperAds={buyMagazineNewspaperAds}
        buyPosters={buyPosters}
        buyMovieTrailers={buyMovieTrailers}
        budget={budget}
        />
        : null
      }
      

    </SafeAreaView>
  )
}

export default FilmingHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
