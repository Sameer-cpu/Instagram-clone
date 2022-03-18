import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Model/globleStorage/redux/storage';
import {NavigationController} from './src/Model/navigation/navigation';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
const App = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Provider store={store}>
        <NavigationController />
      </Provider>
    </TouchableWithoutFeedback>
  );
};

export default App;
