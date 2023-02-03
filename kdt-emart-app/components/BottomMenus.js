import styled from 'styled-components/native';
import { Text } from "react-native";
import { BottomIconData } from './datas/BottomIconData';
import EmartIcon from './EmartIcon';

const BottomMenuWrapper = styled.View`
  width: 100%;
  flex: 3;
  background-color: #ffb71b;
`;

const BottomMenus = () => {

  return (
    <BottomMenuWrapper>
      {
        BottomIconData.map( icon => (
          <EmartIcon key={icon.id} iconData={icon.icon} url={icon.url} />
        ))
      }
    </BottomMenuWrapper>
  );
}

export default BottomMenus;