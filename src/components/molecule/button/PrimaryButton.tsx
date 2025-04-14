import Typography from '@components/atom/typography/Typography';
import React from 'react';
import {Button, ButtonProps} from 'react-native';

interface PrimaryButtonProps extends ButtonProps {
  text: string;
}

function PrimaryButton({text, ...props}: PrimaryButtonProps) {
  return (
    <Button {...props}>
      <Typography>{text}</Typography>
    </Button>
  );
}

export default PrimaryButton;
