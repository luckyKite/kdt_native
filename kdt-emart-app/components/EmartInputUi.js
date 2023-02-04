import { useEffect, useState, useRef } from "react";
import { Dimensions, Platform, useWindowDimensions } from "react-native";
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

// 여기서 placeholder와 getData를 준 것은 디폴트 값이라고 생각할 수 있다.
const EmartInputUi = ({ placeholder="검색어를 입력하세요.", getData = () => console.log('not f') }) => {

  //const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  const inputRef = useRef();
  const[searchText, setSearchText] = useState('');
  const onChange = (e) => {
    setSearchText(e.nativeEvent.text);
  }

  useEffect( () => {    
    inputRef.current.focus();
  },[])


  return (
    <SearchInput 
      width={width}
      placeholder={placeholder}
      maxLength={20}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="search"
      onChange={onChange}
      onSubmitEditing={()=>getData(searchText)}
      ref={inputRef}
    />
  );
}

export default EmartInputUi;