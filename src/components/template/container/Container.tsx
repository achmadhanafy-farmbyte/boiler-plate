import { Header } from '@components/molecule';
import { HeaderProps } from '@components/molecule/section/Header';
import React, {ReactNode} from 'react';
import { View } from 'react-native';
import {SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface ContainerProps {
  children: ReactNode;
  headerConfig: HeaderProps
}

function Container({children, headerConfig}: ContainerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header {...headerConfig}/>
      <View style={{padding:16}}>
      {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundClear,
  },
}))

export default Container;
