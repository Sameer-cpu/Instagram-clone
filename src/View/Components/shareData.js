import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
export const ShareData = ({name = 'Name', location = 'location'}) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  return (
    <View>
      <View style={styles.upperSection}>
        <View style={styles.imgTitle}>
          <Image
            style={styles.img}
            source={require('../../../assets/story.jpg')}
          />
          <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        <FontAwesome name="ellipsis-v" />
      </View>
      <View style={styles.mainImage}>
        <Image
          style={styles.image}
          source={require('../../../assets/story.jpg')}
        />
      </View>
      <View style={styles.iconBox}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback
            onPress={() => {
              setLike(!like);
            }}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              size={25}
              color={like ? 'red' : 'black'}
            />
          </TouchableWithoutFeedback>
          <Feather
            name="message-circle"
            size={25}
            style={{marginHorizontal: 15, transform: [{rotateY: '190deg'}]}}
          />
          <Ionicons
            name="paper-plane-outline"
            size={25}
            style={{transform: [{rotate: '20deg'}]}}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setSave(!save);
          }}>
          <FontAwesome name={save ? 'bookmark' : 'bookmark-o'} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBox}>
        <View style={styles.likedBox}>
          <Text>Likes</Text>
        </View>
        <View style={styles.captionBox}>
          <Text style={styles.captionBoxTitle}>{name} </Text>
          <Text>Captions</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userName: {
    margin: 0,
    padding: 0,
    fontSize: 12,
    fontWeight: 'bold',
  },
  location: {
    margin: 0,
    padding: 0,
    fontSize: 12,
  },
  upperSection: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
  },
  imgTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 35,
    width: 35,
    marginRight: 10,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  mainImage: {
    margin: 0,
  },
  image: {
    height: 400,
    width,
    resizeMode: 'cover',
  },
  iconBox: {
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  leftIcons: {
    flexDirection: 'row',
  },
  likedBox: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  contentBox: {
    marginHorizontal: 10,
  },
  captionBox:{
    flexDirection:'row'
  },
  captionBoxTitle:{
    color:'black',
    fontWeight:'bold'
  },
});
