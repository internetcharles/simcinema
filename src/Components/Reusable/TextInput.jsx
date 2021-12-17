/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, View, TextInput as RNTextInput,
} from 'react-native';
import PropTypes from 'prop-types'

import { Feather as Icon } from '@expo/vector-icons';

const TextInput = ({
  placeholder, icon, passwordEntry, changeText,
  inputStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgrey',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10,
  },
}) => (
  <View style={inputStyle}>
    <Icon style={styles.icon} name={icon} />
    <RNTextInput
      onChangeText={changeText}
      keyboardType="email-address"
      placeholder={placeholder}
      secureTextEntry={passwordEntry}
      blurOnSubmit
      style={{ width: '70%' }}
    />
  </View>
);

export default TextInput;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgrey',
    height: 48,
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  boxvalid: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
    marginVertical: 10,
  },
  boxinvalid: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 10,
  },
});


TextInput.propTypes = {
  placeholder: PropTypes.string, 
  icon: PropTypes.string, 
  passwordEntry: PropTypes.string, 
  changeText: PropTypes.func,
  inputStyle: PropTypes.object,
}