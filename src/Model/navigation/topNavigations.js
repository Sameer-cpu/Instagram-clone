import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeScreen} from '../../View/screen/homeScreen';
import {InboxScreen} from '../../View/screen/inbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchScreen} from '../../View/screen/searchScreen';
import {UploadContentScreen} from '../../View/screen/uploadContent';
import {ProfileScreen} from '../../View/screen/profileScreen';
import {NotificationScreen} from '../../View/screen/notificationScreen';
import {theme} from '../constants';
import {NewPost} from '../../View/screen/newPost';

const topTab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen name="Initial" component={HomeScreen} />
      <Tab.Screen name="InboxScreen" component={InboxScreen} />
    </Tab.Navigator>
  );
};

export const bottomTabs = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      shifting={false}
      labeled={false}
      barStyle={{
        backgroundColor: theme.color.white,
        borderTopColor: theme.color.grey,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={topTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'home-variant' : 'home-variant-outline'}
                size={25}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'search' : 'ios-search-outline'}
                size={25}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="UploadContentScreen"
        component={NewPost}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="plus-square-o" size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="NotifactionScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <AntDesign name={focused ? 'heart' : 'hearto'} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="face-profile" size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
