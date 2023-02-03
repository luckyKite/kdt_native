import styled from 'styled-components/native';
import { Text } from "react-native";
import { BottomIconData } from './datas/BottomIconData';
import EmartIcon from './EmartIcon';

const BottomMenuWrapper = styled.View`
  width: 100%;
  flex: 4;
  background-color: #ffb71b;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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