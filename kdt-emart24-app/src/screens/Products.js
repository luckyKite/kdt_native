import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Products = () => {
  return (
    <Container>
      <Title>Products Screen</Title>
    </Container>
  )
}

export default Products;