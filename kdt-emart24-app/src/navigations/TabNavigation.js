import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomIconData } from '../datas/BottomIconData';
import { Image } from 'react-native-web';
//import styled from 'styled-components/native';
import TabIcon from '../ui/TabIcon';

const Tab = createBottomTabNavigator();

// const MyIcon = styled.Image`
//   width:25px;
//   height:25px;
// `;

// const TabIcon = ({name}) => {

//   return (
//     <MyIcon source ={name} />
//   );
// }

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#abcdef' },
        height: 80,
      }}
    >
      {
        BottomIconData.map( data => (
          <Tab.Screen 
            key={data.id}
            name={`네임값 : ${data.name}`} 
            component={data.component}
            options={{
              tabBarIcon: ( props ) => TabIcon({ ...props, source: data.icon })
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
}

export default TabNavigation;