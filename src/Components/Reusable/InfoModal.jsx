import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import Button from './Button'

const InfoModal = ({ setModalVisible, modalVisible, offerInfo }) => {
  return (
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}>
          <View style={styles.centerView}>
          <Text>{offerInfo.companyName}</Text>
          <Text>{!offerInfo.rejected ? offerInfo.offer + ' million' : 'No Thanks!'}</Text>
          <Text>{offerInfo.message}</Text>
          <Button label='Close' onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
  )
}

export default InfoModal

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#c8c8c8',
    zIndex: 2,
  }
})
