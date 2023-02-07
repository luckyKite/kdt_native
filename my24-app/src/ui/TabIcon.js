import React from 'react';
import styled from 'styled-components/native';

const EmartTabIcon = styled.Image`
  width:25px;
  height: 25px;
`;

const TabIcon = ({source}) => {
  return (
    <EmartTabIcon source={source} />
  );
}

export default TabIcon;