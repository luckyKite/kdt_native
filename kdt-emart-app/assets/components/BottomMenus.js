import styled from 'styled-components/native';
import { Text } from "react-native";

const BottomMenuWrapper = styled.View`
  width: 100%;
  flex: 3;
  background-color: #ffb71b;
`;

const BottomMenus = () => {

  return (
    <BottomMenuWrapper>
      <Text>BottomMenus</Text>
    </BottomMenuWrapper>
  );
}

export default BottomMenus;