import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <Title>Home</Title>
      <Button title="Go to MenuList" 
        onPress={() => navigation.navigate('MenuList')}
      />
    </Container>
  );
};

export default Home;