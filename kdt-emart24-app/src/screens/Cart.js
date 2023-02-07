import React from 'react';
import styled from 'styled-components/native';

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

const Cart = () => {
  return (
    <Container>
      <ScreenTitle>Cart</ScreenTitle>
    </Container>
  )
}
export default Cart;