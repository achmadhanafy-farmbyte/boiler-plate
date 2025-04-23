/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import RootNavigation from 'src/navigation/RootNavigation';
import {store} from 'src/redux/store';
import './unistyles';
import {Alert} from 'react-native';
import JailMonkey from 'jail-monkey';
import { I18nextProvider } from 'react-i18next';
import i18n from '@utils/language/i18nextConfig';

function App(): React.JSX.Element {

  useEffect(() => {
    // Check if the device is jail broken
    if (JailMonkey.isJailBroken()) {
      Alert.alert(
        'Jail Broken Device',
        'This device is jail broken. Please use a non-jail broken device to run this application.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    }
  }, []);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <RootNavigation />
      </I18nextProvider>
    </Provider>
  );
}

export default App;
