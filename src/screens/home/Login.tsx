import {Input, PrimaryButton} from '@components/molecule';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';
import {useRootNavigation} from 'src/hooks/useRootNavigation';

const LoginScreen = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <PrimaryButton onPress={handleLogin} text="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
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
});

export default LoginScreen;
