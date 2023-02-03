import React from 'react';
import styled from 'styled-components/native';

import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/StackNavigation';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;