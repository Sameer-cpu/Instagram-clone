import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Iconhandilar} from '../../Model/brain/iconHandilar';
import {theme} from '../../Model/constants';
import {InputField} from '../Components/textInput';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { storePosts } from '../../Model/firebse/storePosts';
import { useSelector } from 'react-redux';

export const NewPost = ({navigation}) => {
  const [imgSource, setSource] = useState(null);
  const [captin, setCaption] = useState(null);
  const {id} = useSelector(state => state?.InitialUserData)
const  gallery = () => {
    try {
      launchImageLibrary({mediaType: 'photo', selectionLimit: 1}, res => {
        if (res.didCancel) {
          console.log('=============>>> cancle');
        } else if (res.errorCode) {
          console.log('=============>>> errorCode');
        } else if (res.errorMessage) {
          console.log('=============>>> errorMessage');
        } else if (res.assets) {
          setSource(res.assets[0].uri);
        }
      });
    } catch (error) {
      console.log({error});
    }
  };
 const camera = () => {
    try {
      launchCamera({mediaType: 'photo', selectionLimit: 1}, res => {
        if (res.didCancel) {
          console.log('=============>>> cancle');
        } else if (res.errorCode) {
          console.log('=============>>> errorCode');
        } else if (res.errorMessage) {
          console.log('=============>>> errorMessage');
        } else if (res.assets) {
          setSource(res.assets[0].uri);
        }
      });
    } catch (error) {
      console.log({error});
    }
  };
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.mainContainer}>
      <View style={styles.appbar}>
        <View style={styles.appBarAside}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Iconhandilar
              rest={{
                type: 'AntDesign',
                iconName: 'arrowleft',
                styles: styles.backArrow,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>New Post</Text>
        </View>
        <TouchableOpacity onPress={() => {
            const filename = imgSource.substring(imgSource.lastIndexOf('/') + 1);
            const uploadUri = Platform.OS === 'ios' ? imgSource.replace('file://', '') : imgSource;
            storePosts({postData:{'image':uploadUri,'caption':captin,'userId':id}})
            setSource(null)
            setCaption("")
        }}>
          <Iconhandilar
            rest={{
              type: 'AntDesign',
              iconName: 'check',
              styles: styles.check,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.postSection}>
        {imgSource ? (
          <Image style={styles.postImage} source={{uri: imgSource}} />
        ) : (
          <Iconhandilar
            rest={{
              type: 'EvilIcons',
              iconName: 'image',
              styles: styles.imgIcon,
            }}
          />
        )}
        <InputField placeholder="write a caption..." onChangeText={(value)=>{
          setCaption(value)
        }} />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          alert('some thing went wrong');
        }}>
        <Text>Tag People</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          alert('some thing went wrong');
        }}>
        <Text>Add Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          gallery();
        }}>
        <Text>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          camera();
        }}>
        <Text>Camera</Text>
      </TouchableOpacity>
    </View>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 25,
    marginRight: 30,
  },
  check: {
    fontSize: 25,
    color: theme.color.lightBlue,
  },
  appBarAside: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  appBarTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  postSection: {
    padding: 10,
    flexDirection: 'row',
    borderBottomColor: theme.color.lightGrey,
    borderBottomWidth: 1,
  },
  postImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  imgIcon: {
    padding: 10,
    justifyContent: 'center',
    marginRight: 10,
    alignSelf: 'center',
    fontSize: 25,
  },
  btn: {
    padding: 15,
    borderBottomColor: theme.color.lightGrey,
    borderBottomWidth: 1,
  },
  btnTitle: {
    fontSize: 16,
  },
});
