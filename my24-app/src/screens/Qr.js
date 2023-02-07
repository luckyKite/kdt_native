import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

const Qr = () => {
  return (
    <Container>
      <Text>Qr</Text>
    </Container>
  );
}

export default Qr;