import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScr} from '../../View/screen/logins';
import {bottomTabs} from './topNavigations';
import {EditScreen} from '../../View/screen/profile/editScreen';
import {FollowersScreen} from '../../View/screen/profile/followersScreen';
import {Setting} from '../../View/screen/profile/setting';
import {NewPost} from '../../View/screen/newPost';
import {TOKEN, USER_DATA} from '../../Controller/localStorage/keys';
import {getStoredData} from '../../Controller/localStorage/getData';
import {useDispatch} from 'react-redux';
import {userInitialData} from '../globleStorage/redux/actions/actions';
const Stack = createNativeStackNavigator();
export const NavigationController = () => {
  const dispatch = useDispatch(null);
  const [initialScreen, setInitialScreen] = useState(null);
  useEffect(() => {
    getStoredData(TOKEN)
      .then(e => {
        setInitialScreen(e);
      })
      .catch(e => {
        console.log({e});
      });
  }, []);
  useEffect(() => {
    getStoredData(USER_DATA)
      .then(e => {
        console.log({e});
        if(e !== null)
        dispatch(userInitialData(e));

      })
      .catch(e => {
        console.log({e});
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName= {initialScreen !== null ?'LoginScr':'BottomsTabes'} >
        {initialScreen === null ? (
          <Stack.Group>
            <Stack.Screen
              name="LoginScr"
              component={LoginScr}
              options={{headerShown: false}}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="BottomsTabes"
              component={bottomTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditScreen"
              component={EditScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="FollowersScreen"
              component={FollowersScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen
              name="NewPost"
              component={NewPost}
              options={{headerShown: false}}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
