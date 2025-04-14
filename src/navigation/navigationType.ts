import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootNavigationParams = {
  HOME: {
    id: string;
  };
};

export const RootStack = createNativeStackNavigator<{
  HOME: {id: string};
}>();
