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

const MenuDetail = ({navigate, route, menu}) => {
  console.log(navigate,route, menu);
  return (
    <Container>
      <Title>{route.params.menu.name}</Title>
      <Text>ID : {route.params.menu.id}</Text>
      <Text>{route.params.menu.price} 원</Text>
      <Text>{route.params.menu.description}</Text>
    </Container>
  )
}

export default MenuDetail;