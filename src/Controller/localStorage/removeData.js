import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DATA, TOKEN} from './keys';
export const removeAllStoredData = () => {
  const keys = [USER_DATA, TOKEN];
  keys.forEach(e => {
     AsyncStorage.removeItem(e);
  });
};
