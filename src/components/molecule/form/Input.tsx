import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {}

function Input({...props}: InputProps) {
  return (
    <TextInput style={styles.input} placeholderTextColor="#999" {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default Input;
