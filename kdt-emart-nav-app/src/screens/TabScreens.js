import React from 'react';
import styled from 'styled-components/native';

const TabConatiner = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
`;

const TabIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const TabText = styled.Text`
  font-size: 30px;
  color: #222;
`;


export const Cart = () => {
  return (
    <TabConatiner>
      {/* <TabIcon source={require('../../assets/icons/cart.png')} /> */}
      <TabText>Cart</TabText>
    </TabConatiner>
  );
};

export const Wallet = () => {
  return (
    <TabConatiner>
      {/* <TabIcon source={require('../../assets/icons/pay.png')} /> */}
      <TabText>Wallet</TabText>
    </TabConatiner>
  );
};

export const QR = () => {
  return (
    <TabConatiner>
      {/* <TabIcon source={require('../../assets/icons/qr.png')} /> */}
      <TabText>QR</TabText>
    </TabConatiner>
  );
};

export const Pin = () => {
  return (
    <TabConatiner>
      {/* <TabIcon source={require('../../assets/icons/pin.png')} /> */}
      <TabText>Pin</TabText>
    </TabConatiner>
  );
};

export const Settings = () => {
  return (
    <TabConatiner>
      {/* <TabIcon source={require('../../assets/icons/settings.png')} /> */}
      <TabText>Settings</TabText>
    </TabConatiner>
  );
};
