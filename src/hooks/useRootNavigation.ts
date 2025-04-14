import { useNavigation as useNativeNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigationParams } from 'src/navigation/navigationType';

type RootNavigationProp = NativeStackNavigationProp<RootNavigationParams>;

export const useRootNavigation = () => useNativeNavigation<RootNavigationProp>();