import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootNavigationParams = {
  HOME: undefined
  ORDER_LIST: undefined
  LOGIN: undefined
};

export const RootStack = createNativeStackNavigator<RootNavigationParams>();
