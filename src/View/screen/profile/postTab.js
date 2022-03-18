import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {posted} from './posted';
import {tagPosted} from './tagpost';
import {theme} from '../../../Model/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialTopTabNavigator();
export const PostTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          borderBottomColor: theme.color.lightGrey,
          borderBottomWidth: 1,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
          },
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="grid" size={25} />;
          },
        }}
        name="Settings"
        component={posted}
      />
      <Tab.Screen
        name="Home"
        component={tagPosted}
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
          },
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="tooltip-image-outline" size={25} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
