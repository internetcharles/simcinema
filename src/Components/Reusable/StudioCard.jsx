import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const StudioCard = ({
  companyName, onPress, color = '#E0E5EE', textColor = 'black', offer
}) => {
  return (
    <RectButton style={{ ...styles.container, backgroundColor: color }} {...{ onPress }}>
      <Text style={{ color: textColor, ...styles.label }}>{companyName}</Text>
      <Text style={styles.offer}>{offer > 0 ? "$" + offer + " million" : offer < 0 ? "Rejected!" : "Haven't Asked"}</Text>
    </RectButton>
  )
}

export default StudioCard

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
  offer: {
    marginRight: 15,
  }
})
