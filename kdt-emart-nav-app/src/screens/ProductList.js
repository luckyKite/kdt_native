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

const ProductList = () => {
  return (
    <Container>
      <Title>ProductList</Title>
      <Button title="Go to List" />
    </Container>
  );
};

export default ProductList;