import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';
import BottomMenus from './assets/components/BottomMenus';
import MainSection from './assets/components/MainSection';
import TopMenus from './assets/components/TopMenus';

const EmartContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <EmartContainer>
      <TopMenus />
      <MainSection />
      <BottomMenus />
      <StatusBar style="auto" />
    </EmartContainer>
  );
}
