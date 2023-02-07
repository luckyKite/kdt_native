import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { stackMainData } from '../datas/StackMainData';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      {
        stackMainData.map( data => (
          <Stack.Screen key={data.id} name={data.name} component={data.component} />
        ))
      }     
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;