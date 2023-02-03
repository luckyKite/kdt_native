import React from 'react';
import { Button } from 'react-native';

import styled from 'styled-components/native';

const Menu = [
  {
    id: 1,
    name: 'Snack',
    path: 'snack',
  },
  {
    id: 2,
    name: 'Drink',
    path: 'drink',
  },
  {
    id: 3,
    name: 'Food',
    path: 'food',
  },
]

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.Text`
  font-size: 24px;
  margin: 10px 0;
`;

const handleClick = item => {
  console.log(item);
}

const MenuList = () => {
  return (
    <Container>
      <ListTitle>Menu List</ListTitle>
      {
        Menu.map( item => (
          <Button title={item.name} key={item.id} onPress={handleClick}/>
        ))
      }
    </Container>
  );
}

export default MenuList;