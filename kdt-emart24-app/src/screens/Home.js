import React from 'react';
import styled from 'styled-components/native';
import HomeStackNavigation from '../navigations/HomeNavigation';

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

const ScreenTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Home = () => {
  return (
    <HomeStackNavigation />
  )
}
export default Home;