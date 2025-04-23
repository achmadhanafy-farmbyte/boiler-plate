/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import RootNavigation from 'src/navigation/RootNavigation';
import {store} from 'src/redux/store';
import './unistyles';
import { Alert } from 'react-native';
import JailMonkey from 'jail-monkey';

function App(): React.JSX.Element {

  // Check if the device is jail broken
  useEffect(() => {
    if(JailMonkey.isJailBroken()){
      Alert.alert(
        'Jail Broken Device',
        'This device is jail broken. Please use a non-jail broken device to run this application.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: false },
      );
    }
  }
  , []);

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
