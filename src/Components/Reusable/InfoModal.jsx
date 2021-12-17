import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const InfoModal = ({ setModalVisible, modalVisible, offerInfo }) => {
  return (
    <View style={styles.centerView}>
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}>
          <Text>{offerInfo.companyName}</Text>
          <Text>{!offerInfo.rejected ? offerInfo.offer + ' million' : 'No Thanks!'}</Text>
          <Text>{offerInfo.message}</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default InfoModal

const styles = StyleSheet.create({
  centerView: {
    position: 'absolute',
    zIndex: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  }
})
