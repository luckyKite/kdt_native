import React, { useEffect, useState } from 'react';
import { Text } from 'react-native'; //native-web 쓰면 안됨!!!!
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

const ProductDetail = (props) => {
  console.log(props)

  const productData = props.route.params.data;

  return (
    <Container>
      <Title>{productData.title}</Title>
      <Text>{productData.description}</Text>
    </Container>
  )
}

export default ProductDetail;