import React from 'react';
import { Button } from 'react-native'; //native-web 쓰면 안됨!!!!
import styled from 'styled-components/native';


const ProductCardWrap = styled.View`
  width: 300px;
  height: 400px;
  margin-right: 20px;
`;

const ProductImage = styled.Image`
  border-radius: 5px;
  width: 300px;
  height: 300px;
`;

const ProductCardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

const ProductCard = (props) => {
  console.log(props)

  const handlePress = () => {
    props.navigation.navigate('ProductDetail', {data: props.data})
  }

  return (
    <ProductCardWrap>
      <ProductImage source={{ uri: props.data.thumbnail }} />
      <ProductCardTitle>{props.data.title}</ProductCardTitle>
      <Button title="상세보기" onPress={handlePress} />
    </ProductCardWrap>
  );

}

export default ProductCard;