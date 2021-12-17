import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, TextInput, View, Alert } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'
import PropTypes from 'prop-types'
import Button from '../Reusable/Button'
import { useDispatch } from 'react-redux'
import { setInfo } from '../../Redux/actions/movieActions'
import { useSelector } from 'react-redux'

const MovieInfo = ({ navigation }) => {

  const dispatch = useDispatch();
  const movieInfo = useSelector((state) => state.info)

  const [title, setTitle] = useState(movieInfo.title);
  const [genre, setGenre] = useState(movieInfo.genre);
  const [description, setDescription] = useState(movieInfo.description);
  
  const titleEdit = (text) => {
    setTitle(text);
  }

  const descriptionEdit = (text) => {
    setDescription(text);
  }

  const handleSubmit = () => {
    if (!title || !genre) {
      Alert.alert(
        "Missing Info!",
        "You must enter both a title and select a genre!",
        [
          {
            text: "Okay",
            onPress: () => console.log("Cancel Pressed")
          }
        ]
      )
    } else {
      dispatch(setInfo({
        title: title,
        description: description,
        genre: genre,
      }))
      navigation.navigate('infosummary')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Title</Text>
      <TextInput     
        style={styles.titleInput}
        placeholder="Star Wars"
        onChangeText={titleEdit}
        blurOnSubmit
        autoFocus 
      />
      <Text>Description</Text>
      <TextInput     
        style={styles.descriptionInput}
        placeholder="A rootin' tootin' space adventure."
        onChangeText={descriptionEdit}
        multiline
        blurOnSubmit
      />
      <Text>Genre</Text>
      <RadioButton.Group onValueChange={newGenre => setGenre(newGenre)} value={genre}>
        <View style={styles.groupContainer}>
          <View style={styles.radioGroup}>
            <View style={styles.genreContainer}>
              <View style={styles.radioButton}>
                <RadioButton value="Action/Adventure" />
              </View>
              <Text>
                Action/Adventure
              </Text>
            </View>
            <View style={styles.genreContainer}>
              <View style={styles.radioButton}>
                <RadioButton value="Comedy" />
              </View>
              <Text>
                Comedy
              </Text>
            </View>
            <View style={styles.genreContainer}>
              <View style={styles.radioButton}>
                <RadioButton value="Drama" />
              </View>
              <Text>
                Drama
              </Text>
            </View>
            <View style={styles.genreContainer}>
              <View style={styles.radioButton}>
                <RadioButton value="Romance" />
              </View>
              <Text>
                Romance
              </Text>
            </View>
            </View>
            <View style={styles.radioGroup}>
            <View style={styles.genreContainer}>
              <View style={styles.radioButton}>
                <RadioButton value="Horror" />
              </View>
              <Text>
                Horror
              </Text>
            </View>
            <View style={styles.genreContainer}>
              <View style={styles.radioButton}>
                <RadioButton value="Sci-Fi" />
              </View>
              <Text>
                Sci-Fi
              </Text>
            </View>
            <View style={styles.genreContainer}>
              <View style={styles.radioButton}>
                <RadioButton value="Animated" />
              </View>
              <Text>
                Animated
              </Text>
            </View>
          </View>
        </View>
      </RadioButton.Group>
      <Button onPress={handleSubmit} />
    </SafeAreaView>
  )
}

export default MovieInfo

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    titleInput: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    width: '80%',
    height: '5%',
    backgroundColor: 'white',
    borderRadius: 5,
    fontFamily: 'Avenir-Book',
  },
  descriptionInput: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    width: '80%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 5,
    fontFamily: 'Avenir-Book',
  },
  genreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioButton: {
    borderColor: '#68ffc0',
    backgroundColor: 'white',
    borderWidth: 1,
    marginHorizontal: 5,
    marginRight: 5,
  },
  radioGroup: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  groupContainer: {
    flexDirection: 'row'
  }
})

MovieInfo.propTypes = {
  navigation: PropTypes.object,
}