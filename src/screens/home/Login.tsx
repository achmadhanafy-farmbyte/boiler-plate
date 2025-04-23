import {Typography} from '@components/atom';
import {Input, PrimaryButton} from '@components/molecule';
import i18n from '@utils/language/i18nextConfig';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';
import {StyleSheet, useUnistyles} from 'react-native-unistyles';
import {useRootNavigation} from 'src/hooks/useRootNavigation';

const LoginScreen = () => {
  const {t} = useTranslation();
  const {theme} = useUnistyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useMMKVString('user.token');
  const navigation = useRootNavigation();

  useEffect(() => {
    if (token) {
      navigation.replace('HOME');
    }
  }, [navigation, token]);

  const handleLogin = () => {
    setToken('Token 12345');
  };

  const isLanguageActive = (lang: string) => {
    return i18n.language === lang;
  };

  const styleTouchable = (lang: string) => {
    return {
      padding: 8,
      borderRadius: 8,
      backgroundColor: isLanguageActive(lang) ? theme.colors.primary : '#ccc',
      marginRight: 8,
    };
  };

  const styleLangText = (lang: string): StyleProp<TextStyle> => {
    return {
      color: '#333',
      fontWeight: isLanguageActive(lang) ? '600' : '500',
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.langContainer}>
        <Typography>{t('language')}</Typography>
        <View style={styles.langItem}>
          <TouchableOpacity
            onPress={() => i18n.changeLanguage('en')}
            style={styleTouchable('en')}>
            <Typography style={styleLangText('en')}>EN</Typography>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => i18n.changeLanguage('id')}
            style={styleTouchable('id')}>
            <Typography style={styleLangText('id')}>ID</Typography>
          </TouchableOpacity>
        </View>
      </View>
      <Typography style={styles.title}>{t('welcome')}</Typography>
      <Input
        placeholder={t('email')}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder={t('password')}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <PrimaryButton onPress={handleLogin} text={t('login')} />
    </View>
  );
};

const styles = StyleSheet.create((theme)=>({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundGray,
  },
  langContainer: {position: 'absolute', top: 50, right: 0, padding: 16},
  langItem:{flexDirection: 'row', marginTop: 8},
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6f4e37', // coffee-like brown
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
}));

export default LoginScreen;
