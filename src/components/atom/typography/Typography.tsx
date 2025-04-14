import React, {ReactNode} from 'react';
import {Text, TextProps} from 'react-native';

interface TypographyProps extends TextProps {
  children: ReactNode;
}

function Typography({children, ...props}: TypographyProps) {
  return <Text {...props}>{children}</Text>;
}

export default Typography;
