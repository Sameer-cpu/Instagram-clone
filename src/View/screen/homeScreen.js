import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { removeAllStoredData } from '../../Controller/localStorage/removeData';
import {theme} from '../../Model/constants';
import {ShareData} from '../Components/shareData';
import {Story} from '../Components/story';
import firestore from '@react-native-firebase/firestore'
const {width, height} = Dimensions.get('window');
export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.topTab}>
          <Text style={styles.topTabTitle}>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Text>
          <TouchableOpacity
            onPress={async() => {
              removeAllStoredData()
            }}>
            <MaterialCommunityIcons name="facebook-messenger" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.storySection}>
          <Story />
        </View>
        <View>
          <ShareData />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {backgroundColor: theme.color.white, flex: 1},
  topTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width,
    top: 0,
  },
  topTabTitle: {
    fontSize: 30,
  },
  storySection: {
    borderBottomColor: theme.color.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});
