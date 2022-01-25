import React from 'react'
import { Modal, SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from '../Reusable/Button'

const MovieInfoModal = ({
  setMovieModalVisible,
  movieModalVisible,
  movieInfo
}) => {
  return (
    <Modal
      animationType='slide'
      transparent
      visible={movieModalVisible}>
      <SafeAreaView style={styles.container}>
        <Text>
          {movieInfo.title}
        </Text>
        <Text>
          {movieInfo.genre}
        </Text>
        <Text>
          {movieInfo.description}
        </Text>
        <Text>
          Starring {movieInfo.leadActor} and {movieInfo.leadActress}
        </Text>
        <Text>
          Composed by {movieInfo.composer}
        </Text>
        <Text>
          VFX by {movieInfo.sfx}
        </Text>
        <Text>
          Sound by {movieInfo.audio}
        </Text>
        <Button label='Close' onPress={() => setMovieModalVisible(false)} />
      </SafeAreaView>
    </Modal>
  )
}

export default MovieInfoModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  }
})
