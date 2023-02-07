import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

const Search = () => {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
}

export default Search;