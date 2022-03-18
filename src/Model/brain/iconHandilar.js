import React from 'react';
import {Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
export const Iconhandilar = ({rest = {}}) => {
  const {type, iconName, styles} = rest;
  switch (type) {
    case 'Fontisto':
      return <Fontisto name={iconName} style={styles} />;
    case 'MaterialIcons':
      return <MaterialIcons name={iconName} style={styles} />;
    case 'AntDesign':
      return <AntDesign name={iconName} style={styles} />;
    case 'Feather':
      return <Feather name={iconName} style={styles} />;
    case 'Ionicons':
      return <Ionicons name={iconName} style={styles} />;
    case 'FontAwesome':
      return <FontAwesome name={iconName} style={styles} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={iconName} style={styles} />;
    case 'EvilIcons':
      return <EvilIcons name={iconName} style={styles} />;
    case 'Entypo':
      return <Entypo name={iconName} style={styles} />;
    case 'FontAwesome5Pro':
      return <FontAwesome5Pro name={iconName} style={styles} />;
    default:
      <Text>Some thing went wrong</Text>;
  }
};
