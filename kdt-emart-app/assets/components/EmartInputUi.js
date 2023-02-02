import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";

const SearchInput = styled.TextInput`
  width: ${({width}) => width - 32}px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
  border-width: 1px;
  border-color: #e5e5e5;
  border-style: solid;
  padding: 0 30px;
  margin: auto;
  box-sizing: border-box;
`;


const EmartInputUi = () => {

  const width = Dimensions.get('window').width;
  console.log(Platform.OS, width);

  return (
    <SearchInput 
      width={width}
      placeholder="검색어를 입력하세요."
      maxLength={20}
    />
  );
}

export default EmartInputUi;