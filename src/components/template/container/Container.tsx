import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

interface ContainerProps {
  children: ReactNode;
}

function Container({children}: ContainerProps) {
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}

export default Container;
