import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {theme} from '../../Model/constants';
import {ButtonComp} from '../Components/button';
import {InputField} from '../Components/textInput';
const {width} = Dimensions.get('window');
import auth from '@react-native-firebase/auth';
import {
  LoginManager,
  AccessToken,
  GraphRequestManager,
  GraphRequest,
} from 'react-native-fbsdk-next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TOKEN, USER_DATA} from '../../Controller/localStorage/keys';
import {setUserDate} from '../../Controller/localStorage/setData';
import {useDispatch} from 'react-redux';
import {userInitialData} from '../../Model/globleStorage/redux/actions/actions';
import {
  getStoredUserDataFromFirebase,
  setUserId,
  storeUserDetaiInFirebase,
} from '../../Model/firebse/storeFBD';
export const LoginScr = ({navigation}) => {
  const [isLoading, setIsloading] = useState(false);
  const [UID, setUID] = useState(null);
  const dispatch = useDispatch();

useEffect(()=>{
  UserAuthantication();
  UserAuthantication().then(e => {
    setUID(e.user._user.uid)
    console.log({UID:e.user._user.uid});
  });
})

  const onFacebookButtonPress = async () => {
    try {
      setIsloading(true);
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      setIsloading(false);

      // navigation.navigate('BottomsTabes');
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      } else {
        const infoRequest = new GraphRequest(
          '/me?fields=email,name,picture',
          null,
          _responseInfoCallback,
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
      }
    } catch (error) {
      setIsloading(false);
      console.log({error});
      Alert('Something went wrong');
    }
  };
  const _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      accountCheck({result});
      return result;
    }
  };

  const UserAuthantication = async () => {
    console.log('UserAuthantication is working');
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    // setUserDate({key: TOKEN, data: facebookCredential.token});

    const user = auth().signInWithCredential(facebookCredential);
    return user;
  };

  const accountCheck = ({result}) => {
    const {picture, name, email} = result;
    // console.log("Account Check is Working",{picture:picture.data.url,name,email});
    getStoredUserDataFromFirebase()
      .then(querySnapshot => {
        console.log({querySnapshot: querySnapshot._docs});
        querySnapshot.forEach(documentSnapshot => {
          console.log({userId:documentSnapshot.id});
          console.log({UID:documentSnapshot.data().userId});
          if (documentSnapshot.data().userId === documentSnapshot.id) {
            // dispatch(userInitialData({picture, name, email}));
            // setUserDate({key: USER_DATA, data: {picture, name, email}});
            alert('User Is already  Registered');
          } else {
            alert('else part is working')
            UserAuthantication();
            // storeUserDetaiInFirebase({userData: {picture, name, email}});
            // UserAuthantication().then(e => {
              setUserId({uid:documentSnapshot.id});
            // }
            // );

            // dispatch(userInitialData({picture, name, email}));
            // setUserDate({key: USER_DATA, data: {picture, name, email}});
          }
        });
      })
      .catch(e => {
        alert('something went wrong, try again');
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView
        style={styles.mainSectionContainer}
        behavior="height">
        <Text style={styles.mainTitle}>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Text>
        <InputField
          rest={styles.inputContainer}
          placeholder="Username"
          width={width / 1.2}
        />
        <InputField
          rest={styles.inputContainer}
          placeholder="Password"
          width={width / 1.2}
        />
        <ButtonComp title="Log In" width={width / 1.2} />
        <View style={styles.helpingBox}>
          <Text>Forget to login? </Text>
          <Text style={styles.hBSndPara}>Get help signing in.</Text>
        </View>
        <View style={styles.lineBox}>
          <View style={styles.line} />
          <Text> OR </Text>
          <View style={styles.line} />
        </View>

        {isLoading ? (
          <ActivityIndicator style={styles.fbLoginBtn} />
        ) : (
          <TouchableOpacity
            onPress={() => {
              // accountCheck()
              onFacebookButtonPress();
              // setUserId()
            }}>
            <View style={styles.fbLoginBtn}>
              <Icon name="facebook-square" size={20} />
              <Text style={styles.fbLoginBtnTitle}>Log in with Facebook</Text>
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.accountBox}>
          <Text>Don't have an account?</Text>
          <Text style={styles.accountBoxSndTitle}> Sign Up</Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainSectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 30,
    marginBottom: 30,
  },
  helpingBox: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
  hBSndPara: {
    fontWeight: 'bold',
  },
  lineBox: {
    flexDirection: 'row',
    width: width / 1.2,
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'black',
    height: 1,
    flex: 1,
  },
  fbLoginBtn: {
    padding: 10,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fbLoginBtnTitle: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  accountBox: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    borderTopWidth: 1,
    width,
    borderTopColor: theme.color.grey,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  accountBoxSndTitle: {
    fontWeight: 'bold',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: theme.color.grey,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
