import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../Model/constants';
import {InputField} from '../../Components/textInput';
const {width, height} = Dimensions.get('window');
export const Following = () => {
  return (
    <>
      <InputField
        placeholder="Search Followers..."
        rest={styles.inputContainer}
        width={width / 1.1}
        icon={true}
      />
    </>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: theme.color.lightGrey,
  },
});
