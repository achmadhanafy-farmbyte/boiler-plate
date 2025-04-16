import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'user-storage',
  encryptionKey: 'ymmr1mgor145njhnmk',
});
