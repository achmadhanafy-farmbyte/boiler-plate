import {Typography} from '@components/atom';
import {Container} from '@components/template';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { RootNavigationParams } from 'src/navigation/navigationType';

type HomeScreenRouteProp = RouteProp<RootNavigationParams, 'HOME'>;

type HomeScreenProps = {
  route: HomeScreenRouteProp;
};

function HomeScreen({route}:HomeScreenProps) {
  return (
    <Container>
      <Typography>HomeScreen</Typography>
    </Container>
  );
}

export default HomeScreen;
