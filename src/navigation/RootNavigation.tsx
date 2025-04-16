import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HOME_STACK} from './stack';
import { SCREEN_CONS } from '@utils/constant/screen.constant';
import { RootNavigationParams } from './navigationType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootNavigationParams>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={SCREEN_CONS.LOGIN}>
        {HOME_STACK.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
