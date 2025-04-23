import Typography from '@components/atom/typography/Typography';
import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string;
}

function PrimaryButton({text, ...props}: PrimaryButtonProps) {
  return (
    <TouchableOpacity {...props} style={style.container}>
      <Typography style={style.text}>{text}</Typography>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 16,
  },
  text: {fontWeight: '600', fontSize: 18, textAlign: 'center'},
}));
export default PrimaryButton;
