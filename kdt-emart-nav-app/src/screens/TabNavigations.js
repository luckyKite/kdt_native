import React, { useEffect, useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { BottomIconData }from '../datas/BottomIconData'; // data import 문제였던 것 같습니다.

const Tab = createBottomTabNavigator();

const MyIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

const TabIcon = ( {name, size, focused, color} ) => {
  console.log(name)

  return (
    <MyIcon
      source={name}
    />
  );
}


const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName='HomeStacks'
      screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#ffb71b',
            height: 100,
        },
      }}
    >
      {
        BottomIconData.map( iconData => (
          <Tab.Screen 
            key={iconData.id}
            name={iconData.name} 
            component={iconData.component} 
            options={{
              tabBarIcon: ( props ) => TabIcon({...props, name: iconData.icon }) ,
              tabBarBadge: iconData.cnt ? iconData.cnt : null,
              tabBarBadgeStyle: {
                backgroundColor: '#222',
                color: '#fff',
                position: 'absolute',
                top: 30,
              },
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
}

export default TabNavigation;