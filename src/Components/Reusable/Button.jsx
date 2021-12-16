/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Button = ({
  label, onPress, color = '#E0E5EE', textColor = 'black',
}) => (
  <RectButton style={{ ...styles.container, backgroundColor: color }} {...{ onPress }}>
    <Text style={{ ...styles.label, color: textColor }}>{label}</Text>
  </RectButton>

);

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 15,
    textAlign: 'center',
  },
});

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
  textColor: PropTypes.string,
}