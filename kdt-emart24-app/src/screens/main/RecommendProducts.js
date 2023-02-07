import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import ProductCard from '../../ui/ProductCard';


const RecommednWrap = styled.View`
  height: 370px;
  flex-direction: row;
  padding-top: 10px;
`;


const RecommendProducts = (props) => {
  console.log(props)

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
    <RecommednWrap>
      <ScrollView horizontal={true}>
      {
        productData && productData.map( product => (
          <ProductCard key={product.id} data={product} navigation={props.navigation} />
        )).slice(0,10)
      }
      </ScrollView>
    </RecommednWrap>
  );
}

export default RecommendProducts;