import firestore from '@react-native-firebase/firestore';
import { getStoredUserDataFromFirebase } from './storeFBD';
export const storePosts = ({postData}) => {
  const {image, caption, userId} = postData;
  try {
    UniqueImageIdGenerate({userId}).then(e => {
      firestore()
        .collection('Posts')
        .add({postImage: image, caption: caption, userId: userId, imageId: e});
    });
  } catch (error) {
    console.log('error occur while storing posts', error);
  }
};

export const Posts = () => {
  try {
    return firestore().collection('Posts').get();
  } catch (error) {
    console.log('error occur while getting posts Data', error);
  }
};

const UniqueImageIdGenerate = async () => {
  console.log('Working');
  try {
    return getStoredUserDataFromFirebase()
      .then(querySnapshot => {
        if (querySnapshot._docs.length >= 0) {
          const latestId = querySnapshot._docs.reduce(
            (acc, shot) =>
              shot.id,
            userID,
          );
          console.log({latestId});
          // return latestId + 1;
        } else {
          return userID;
        }
      })
      .catch(e => {
        console.log('Error occur while generation unique key for Image', e);
      });
  } catch (error) {
    console.log('error occur while generation unique key for image', error);
  }
};
