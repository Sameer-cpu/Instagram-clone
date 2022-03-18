import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {theme} from '../../Model/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const InputField = ({
  placeholder = '',
  width = 100,
  rest = {},
  icon = false,
  onChangeText= ()=>{}
}) => {
  return (
    <View style={{...rest, width, flexDirection: 'row', alignItems: 'center'}}>
      {icon && (
        <FontAwesome
          name="search"
          color={theme.color.grey}
          size={16}
          style={{marginHorizontal: 10}}
        />
      )}
      <TextInput placeholder={placeholder} returnKeyType="next" onChangeText={onChangeText}/>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: theme.color.grey,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
