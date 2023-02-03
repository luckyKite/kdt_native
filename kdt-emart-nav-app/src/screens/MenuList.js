import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;

`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #2c2c2c;
`;

const MenuData = [
  {
    id: 1,
    name: '아메리카노',
    price: 3000,
    description: '아메리카노 설명',
  },
  {
    id: 2,
    name: '카페라떼',
    price: 4000,
    description: '카페라떼 설명',
  },
  {
    id: 3,
    name: '카푸치노',
    price: 5000,
    description: '카푸치노 설명',
  },
]

const MenuList = ({navigation, route}) => {
  return (
    <Container>
      <Title>{route.name}</Title>
      {
        MenuData.map( menu => (
          <Button 
            title={menu.name}
           key={menu.id} 
           onPress={()=> navigation.navigate('MenuDetail',{menu})}
          />
        ))
      }
    </Container>
  )
}

export default MenuList;