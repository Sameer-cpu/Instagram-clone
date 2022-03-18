import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Following} from './following';
import {Followers} from './followers';
import {theme} from '../../../Model/constants';

const Tab = createMaterialTopTabNavigator();

export const FollowTabs = ({initialScreen = 'Following'}) => {
  return (
    <Tab.Navigator
      initialRouteName={initialScreen}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          borderBottomColor: theme.color.lightGrey,
          borderBottomWidth: 1,
        },
      }}>
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
          },
        }}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </Tab.Navigator>
  );
};
