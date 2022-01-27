import { Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../Reusable/Button';

const ReviewModal = ({
  setModalVisible,
  modalVisible,
  movieInfo
}) => {
  return (
    <Modal
      animationType='slide'
      transparent
      visible={modalVisible}>
        <View style={styles.container}>
          <Text>{movieInfo.title}</Text>
        </View>
        <Button label='Close' onPress={() => setModalVisible(false)} />
    </Modal>
  );
};

export default ReviewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
