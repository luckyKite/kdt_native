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
    initialRouteName='Home'
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#abcdef', borderTop: 'none', paddingTop: 14, paddingBottom: 14, boxSizing: 'border-box', height: 70 },
        height: 80,
      })}
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