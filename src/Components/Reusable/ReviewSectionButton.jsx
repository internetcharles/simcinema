import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const ReviewSectionButton = ({
  leftText, onPress, color = '#E0E5EE', textColor = 'black', rightText
}) => {
  return (
    <RectButton style={{ ...styles.container, backgroundColor: color }} {...{ onPress }}>
      <Text style={{ color: textColor, ...styles.label }}>{leftText}</Text>
      <Text style={styles.rightText}>
        {rightText} stars
      </Text>
    </RectButton>
  )
}

export default ReviewSectionButton

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 50,
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 15
  },
  rightText: {
    marginRight: 15,
  }
})
