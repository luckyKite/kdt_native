import React from 'react';
import Home from '../screens/Home';
import MenuList from '../screens/MenuList';
import MenuDetail from '../screens/MenuDetail';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='MenuList' component={MenuList} />
      <Stack.Screen name='MenuDetail' component={MenuDetail} />
    </Stack.Navigator>
  )
}

export default StackNavigation;