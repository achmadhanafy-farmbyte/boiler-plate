import React, {ReactNode} from 'react';
import {Text, TextProps} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

interface TypographyProps extends TextProps {
  children: ReactNode;
}

function Typography({children, ...props}: TypographyProps) {
  return (
    <Text
      {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create(theme => ({
  text: {
    color: theme.colors.textColor,
  },
}));

export default Typography;
