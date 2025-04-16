import Typography from '@components/atom/typography/Typography';
import React from 'react';
import {StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string
}

function PrimaryButton({text, ...props}: PrimaryButtonProps) {
  return (
    <TouchableOpacity {...props} style={style.container}>
      <Typography style={style.text}>{text}</Typography>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {backgroundColor:'#34eb89',paddingHorizontal: 24, paddingVertical: 10, borderRadius: 16},
  text: {fontWeight: '600', fontSize: 18}
})
export default PrimaryButton;
