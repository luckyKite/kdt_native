import React from 'react';
import { Button } from 'react-native';
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

const Home = ({navigation, route}) => {
  return (
    <Container>
      <Title>{route.name}</Title>
      <Button title='Go to MenuList' onPress={()=>navigation.navigate('MenuList')}/>
    </Container>
  )
}

export default Home;