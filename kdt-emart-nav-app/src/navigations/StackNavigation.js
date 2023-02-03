import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import MenuList from '../screens/MenuList';
import MenuDetail from '../screens/MenuDetail';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MenuList" component={MenuList} />
      <Stack.Screen name="MenuDetail" component={MenuDetail} />
    </Stack.Navigator>
  );
}

export default StackNavigation;