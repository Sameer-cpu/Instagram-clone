import React, {useState, useRef, createRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {theme} from '../../Model/constants';
import {PostTab} from './profile/postTab';
import {BottomSheet} from '../Components/bottomSheet';
import {newFeeds} from '../Data/newFeed';
import {menu} from '../Data/menu';
import {newFeedSaga} from '../../Model/globleStorage/saga/actions/sagaActions';
import {newFeed} from '../../Model/globleStorage/redux/actions/actions';
const {width, height} = Dimensions.get('window');
export const ProfileScreen = ({navigation}) => {
  const [highlight, setHighlght] = useState(true);

  const bsRef = useRef(null);

  return (
    <View>
      {/* AppBar Start Here */}
      <View style={styles.appBar}>
        <View style={styles.appBarSide}>
          <Ionicons name="md-lock-closed-outline" style={styles.lock} />
          <Text style={styles.userName}>UserName</Text>
          <MaterialIcons name="keyboard-arrow-down" style={styles.arrowDown} />
        </View>
        <View style={styles.appBarSide}>
          <TouchableOpacity
            onPress={() => {
              // dispatch(newFeed({isOpen: true, data: newFeeds, title: true}));
              bsRef?.current?.openModel({data: newFeeds, title: true});
            }}>
            <FontAwesome
              style={styles.plusArrow}
              name="plus-square-o"
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              bsRef?.current?.openModel({data: menu, title: false});
              // dispatch(newFeed({isOpen: true, data: menu, title: false}));
            }}>
            <FontAwesome style={styles.bars} name="bars" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Profile Section Start Here */}
      <View style={styles.aboutProfile}>
        <View style={styles.profile}>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 1000,
              resizeMode: 'contain',
            }}
            source={require('../../../assets/story.jpg')}
          />
          <Text style={styles.profileName}>User Name</Text>
        </View>
        <View style={styles.followSec}>
          <View style={styles.followSecDetalis}>
            <Text style={styles.followSecNum}>12</Text>
            <Text style={styles.followSecTitle}>Posts</Text>
          </View>
          <TouchableOpacity
            style={styles.followSecDetalis}
            onPress={() => {
              navigation.navigate('FollowersScreen', {
                initalRoute: 'Followers',
              });
            }}>
            <Text style={styles.followSecNum}>217</Text>
            <Text style={styles.followSecTitle}>Followes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.followSecDetalis}
            onPress={() => {
              navigation.navigate('FollowersScreen', {
                initalRoute: 'Following',
              });
            }}>
            <Text style={styles.followSecNum}>185</Text>
            <Text style={styles.followSecTitle}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Edit Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          navigation.navigate('EditScreen');
        }}>
        <Text style={styles.editButtonTitle}>Edit Profile</Text>
      </TouchableOpacity>
      {/* Story Highlights */}
      <View style={styles.storyHighlghts}>
        <View style={styles.storyHighlghtsBox}>
          <Text style={styles.storyHighlghtsTitle}>Story Highlghts</Text>
          <TouchableOpacity
            onPress={() => {
              setHighlght(!highlight);
            }}>
            <MaterialIcons
              name={highlight ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              style={styles.arrowDown}
            />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          {highlight && (
            <>
              <Text>Keep your favourite stories on your profile</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.highlightStoryBox}>
                  <EvilIcons
                    name="plus"
                    style={{fontWeight: '100', fontSize: 70}}
                  />
                  <Text>New</Text>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
      {/* About Posted Details */}
      <View style={{height}}>
        <PostTab />
      </View>
      <BottomSheet ref={bsRef} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lock: {
    color: theme.color.black,
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  arrowDown: {
    fontWeight: '900',
    fontSize: 25,
  },
  plusArrow: {
    marginRight: 10,
  },
  bars: {
    marginLeft: 10,
  },
  // Profile
  aboutProfile: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  // Follow Section
  followSec: {
    flexDirection: 'row',
  },
  followSecDetalis: {
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  followSecNum: {
    fontSize: 16,
    fontWeight: '900',
  },
  followSecTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  // Edit Button
  editButton: {
    paddingVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: theme.color.lightGrey,
    borderWidth: 1.5,
  },
  editButtonTitle: {
    fontWeight: 'bold',
  },
  // Story Highlghts
  storyHighlghts: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  storyHighlghtsBox: {flexDirection: 'row', justifyContent: 'space-between'},
  storyHighlghtsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  highlightStoryBox: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});
