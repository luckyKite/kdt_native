import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
import BottomMenus from './components/BottomMenus';
import MainSection from './components/MainSection';
import TopMenus from './components/TopMenus';
import Cart from './components/Cart';

const EmartContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <EmartContainer>
        <TopMenus />
        
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainSecion} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
        
        <BottomMenus />
        <StatusBar style="auto" />
      </EmartContainer>
      
      </NavigationContainer>
  );
}
