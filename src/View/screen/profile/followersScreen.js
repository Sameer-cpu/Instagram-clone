import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FollowTabs} from './followTabs';
const {width, height} = Dimensions.get('window');
export const FollowersScreen = ({route, navigation}) => {
  const {initalRoute = ''} = route.params;
  return (
    <View>
      <View style={styles.appBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcons name="arrow-back-ios" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.currentUserName}>Current User Name</Text>
      </View>
      <View style={{height}}>
        <FollowTabs initialScreen={initalRoute} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backIcon: {
    fontWeight: '600',
    fontSize: 18,
    marginRight: 20,
  },
  currentUserName: {
    fontSize: 18,
    fontWeight: '600',
  },
});
