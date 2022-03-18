import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../../../Model/constants';
import {InputField} from '../../Components/textInput';
const {width, height} = Dimensions.get('window');
export const EditScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.appBar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign style={styles.appBarClose} name="close" />
          </TouchableWithoutFeedback>
          <Text style={styles.appBarTitle}>Edit Profile</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign style={styles.appBarSave} name="check" />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.editProfile}>
        <Image
          style={{height: 100, width: 100, borderRadius: 100}}
          source={require('../../../../assets/story.jpg')}
        />
        <Text style={styles.editProfileTitle}>Change Profile Photo</Text>
      </View>
      <View style={styles.inputBox}>
        <InputField
          placeholder="Name"
          width={width / 1.1}
          rest={styles.inputContainer}
        />
        <InputField
          placeholder="Username"
          width={width / 1.1}
          rest={styles.inputContainer}
        />
        <InputField
          placeholder="NaPronounsme"
          width={width / 1.1}
          rest={styles.inputContainer}
        />
        <InputField
          placeholder="Webside"
          width={width / 1.1}
          rest={styles.inputContainer}
        />
        <InputField
          placeholder="Bio"
          width={width / 1.1}
          rest={styles.inputContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  appBarClose: {
    fontSize: 30,
    fontWeight: '700',
    marginRight: 20,
  },
  appBarSave: {
    fontSize: 30,
    fontWeight: '700',
    color: theme.color.lightBlue,
  },
  editProfile: {
    alignItems: 'center',
  },
  editProfileTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: theme.color.lightBlue,
    marginVertical: 10,
  },
  inputBox: {
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.color.grey,
    marginVertical: 10,
  },
});
