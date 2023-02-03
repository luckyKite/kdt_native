import styled from "styled-components/native";
import { Text, Image } from "react-native";

const TopMenuWrapper = styled.View`
  width: 100%;
  flex: 4;
  background-color: #fff;
`;

const TopHeaderWrapper = styled.View`
  width: 100%;
  flex: 1;
`;

const TopBodyWrapper = styled.View`
  width: 100%;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const EmartLogo = styled.Image`
  width: 40%;
  height: 45%;
`;

const TopMenus = () => {

  return (
    <TopMenuWrapper>
      <TopHeaderWrapper>
        <TopBodyWrapper>
          <EmartLogo 
            source={ require('../assets/logo.png') }
          />
        </TopBodyWrapper>
      </TopHeaderWrapper>
    </TopMenuWrapper>
  );
}

export default TopMenus;