import { Header } from '@components/molecule';
import { HeaderProps } from '@components/molecule/section/Header';
import React, {ReactNode} from 'react';
import { View } from 'react-native';
import {SafeAreaView } from 'react-native';

interface ContainerProps {
  children: ReactNode;
  headerConfig: HeaderProps
}

function Container({children, headerConfig}: ContainerProps) {
  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
      <Header {...headerConfig}/>
      <View style={{padding:16}}>
      {children}
      </View>
    </SafeAreaView>
  );
}

export default Container;
