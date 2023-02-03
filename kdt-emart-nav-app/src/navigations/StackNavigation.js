import React from 'react';
import Home from '../screens/Home';
import MenuList from '../screens/MenuList';
import MenuDetail from '../screens/MenuDetail';

import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components';

const HeaderLogo = styled.Image`
  width: 150px;
  height: 30px;
`;

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f3f3f3',
          //borderBottomColor: '#ffffff',
          //borderBottomWidth: 1,
          height: 120,
          shadowColor: '#222',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity:0.2,
          shadowRadius: 4.65,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          color: '#222',
        },
        headerTitleAlign: 'center',
        headerTitle: (props) => (
          <HeaderLogo source={require('../../assets/logo.png')} />
        )
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen 
        name='MenuList' 
        component={MenuList} 
        options={{
          headerTitle: '메뉴 리스트',
        }}
      />
      <Stack.Screen name='MenuDetail' component={MenuDetail} />
    </Stack.Navigator>
  )
}

export default StackNavigation;