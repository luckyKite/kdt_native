import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import styled from 'styled-components/native';
import ProductCard from '../ui/ProductCard';
import { Text } from 'react-native-web';

const Container = styled.View`
  background-color: #f3f3f3;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Products = ({navigation, route}) => {
  const [productData, setProductData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products').catch(err => console.log(err))
      setProductData(res.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
    // fetch('http://localhost:3001/products')
    // .then(res => res.json()).then(res => setProductData(res)).catch(err => console.log(err))
  },[])

  return (
    <Suspense fallback={<Text>로딩중...</Text>}>
      <Container>
        <Title>Products Screen</Title>
          {
            productData && productData.map( product => (
              <ProductCard key={product.id} data={product} navigation={navigation} />
            ))
          }
      </Container>
    </Suspense>
  )
}

export default Products;