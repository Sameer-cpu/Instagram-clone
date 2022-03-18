import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../Model/constants';
import {InputField} from '../../Components/textInput';
const {width, height} = Dimensions.get('window');
export const Followers = () => {
  return (
    <>
      <InputField
        placeholder="Search Followers..."
        rest={styles.inputContainer}
        width={width / 1.1}
        icon={true}
      />
      <View>
        <Text>Catorigies</Text>
      </View>
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
