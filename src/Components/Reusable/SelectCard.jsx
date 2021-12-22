import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const SelectCard = ({
  selectName, onPress, color = '#E0E5EE', textColor = 'black', price, status
}) => {
  return (
    <RectButton style={{ ...styles.container, backgroundColor: color }} {...{ onPress }}>
      <Text style={{ color: textColor, ...styles.label }}>{selectName}</Text>
      <Text style={styles.price}>
        {
          status === 'Available' ? `$${price} million` 
          : status === 'Unavailable' ? 'Unavailable'
          : status === 'None' ? 'Free'
          : null
        }
      </Text>
    </RectButton>
  )
}

export default SelectCard

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
  price: {
    marginRight: 15,
  }
})
