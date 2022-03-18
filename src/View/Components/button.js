import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {theme} from '../../Model/constants';

export const ButtonComp = ({title = '', width = 100}) => {
  return (
    <TouchableOpacity style={{...styles.btnContainer, width}}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.color.grey,
  },
});
