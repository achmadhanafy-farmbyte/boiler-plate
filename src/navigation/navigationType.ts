import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootNavigationParams = {
  HOME: {
    id: string;
  };
  ORDER_LIST: undefined
};

export const RootStack = createNativeStackNavigator<RootNavigationParams>();
