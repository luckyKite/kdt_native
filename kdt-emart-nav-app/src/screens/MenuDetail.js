import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;

`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #2c2c2c;
`;

const MenuDetail = ({navigate, route}) => {
  console.log(navigate,route);
  return (
    <Container>
      <Title>{route.params.menu.name}</Title>
      <Text>{route.params.menu.price}</Text>
      <Text>{route.params.menu.description}</Text>
    </Container>
  )
}

export default MenuDetail;