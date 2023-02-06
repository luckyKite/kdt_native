import React from 'react';
import { Platform } from 'react-native';
import Home from '../screens/Home';
import MenuList from '../screens/MenuList';
import MenuDetail from '../screens/MenuDetail';

import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';

const HeaderLogo = styled.Image`
  width: 150px;
  height: 30px;
`;

const Stack = createStackNavigator();
const BackArrow = styled.Image`
  width: 30px;
  height: 30px;
`;

const MenuBtn = styled.Image`
  width: 30px;
  height: 30px;
`;

const StackNavigation = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f3f3f3',
          // borderBottomColor: `#ffffff`,
          // borderBottomWidth: 1,
          height: 120,
          shadowColor: '#222',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4.65,
        },
        headerTintColor: '#ffb71b',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          color: '#222',
        },
        headerTitleAlign: 'center',
        headerTitle: (props) => (
          <HeaderLogo source={require('../../assets/logo.png')} />
        ),
        
      }}
    >
      <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{
          headerLeft: () => {
            const style = {
              marginRight: 10,
              marginLeft: 11,
            };
            return (
              <MenuBtn 
                source={require('../../assets/icons/sort.png')} 
                style={style}
                onPress={()=>{alert('메뉴 버튼 클릭')}}
              />
            )
          },
          headerRight: () => {
            const style = {
              marginRight: 11,
              marginLeft: 10,
            };
            return (
              <MenuBtn 
                source={require('../../assets/icons/user.png')} 
                style={style}
                onPress={()=>{alert('내정보 클릭')}}
              />
            )
          }
        }}
      />
      <Stack.Screen 
        name='MenuList' 
        component={MenuList}
        options={
          {
            headerTitle: '메뉴 리스트',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
              letterSpacing: -1,
              color: '#222',
            },
            headerBackTitleVisible: false,
            headerBackImage: () => {
              const style = {
                marginRight: 10,
                marginLeft: Platform.OS === 'ios' ? 10 : 0,
              };
              return (
                <BackArrow source={require('../../assets/icons/left-circle.png')} style={style} />
              );
  
            }
          }
        }
      />
      <Stack.Screen name='MenuDetail' component={MenuDetail}
        options={({route}) => ({
          headerTitle: route.params.menu.name,
          headerBackTitleVisible: false,
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation;