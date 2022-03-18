import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {theme} from '../../Model/constants';

export const Story = ({title = 'Your Story'}) => {
  return (
    <View style={styles.storyContainer}>
      <View style={styles.storyBox}>
        {/* <Text>Story</Text> */}
        <Image
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/story.jpg')}
        />
        <View style={styles.addBox}>
          <Icon name="plus" size={15} color={theme.color.white} />
        </View>
      </View>
      <Text style={styles.storyTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  storyBox: {
    width: 73,
    height: 73,
    alignSelf: 'flex-start',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    // borderColor: theme.color.grey,
    // borderWidth: 3,
  },
  storyTitle: {
    color: theme.color.black,
    fontSize: 12,
  },
  addBox: {
    position: 'absolute',
    backgroundColor: theme.color.lightBlue,
    padding: 1,
    color: theme.color.white,
    borderRadius: 100,
    bottom: 4,
    right: 0,
    borderColor: theme.color.white,
    borderWidth: 2,
  },
});
