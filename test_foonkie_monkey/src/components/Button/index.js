import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const NO_OP = () => {};

const Button = ({style, text, handleOnPress = NO_OP}) => (
  <TouchableOpacity
    style={{...styles.btn, ...style}}
    onPress={() => handleOnPress()}>
    <Text style={styles.btnText}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
  handleOnPress: PropTypes.func,
};

export default Button;
