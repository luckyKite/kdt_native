import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomIconData } from '../datas/BottomIconData';
//import TabIcon from '../ui/TabIcon';
import styled from 'styled-components/native';

const Tab = createBottomTabNavigator();

const MyIcon = styled.Image`
  width:25px;
  height:25px;
`;

const TabIcon = ({name}) => {

  return (
    <MyIcon source ={name} />
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'green'},
        height:70,
      }}
    >
      {
        BottomIconData.map(data => (
          <Tab.Screen
            key={data.id}
            name={data.name}
            component={data.component}
            options = {{
              tabBarIcon: ( props ) => TabIcon({ ...props, name: data.icon })
            }}
          />
        ))
      }
    </Tab.Navigator>

  );
}

export default TabNavigation;