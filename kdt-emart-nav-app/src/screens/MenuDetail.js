import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

const MenuDetail = () => {
  return (
    <Container>
      <Title>MenuDetail</Title>
    </Container>
  );
}

export default MenuDetail;