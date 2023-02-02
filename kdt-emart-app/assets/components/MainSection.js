import { useEffect, useState } from "react";
import styled from "styled-components/native";
import EmartInputUi from "./EmartInputUi";

const MainScrollWrapper = styled.ScrollView`
  width: 100%;
  flex: 24;
  padding: 10px 16px;
  box-sizing: border-box;
  background-color: #f1f1f1;
`;

const MainSection = () => {

  const[data, setData] = useState();

  const getData = async (searchText) => {
    console.log("Search Data", searchText)
    //setData(data)
  }

  useEffect( ()=> {
    console.log("I am MainSection components", data);
  },[data])

  return (
    <MainScrollWrapper>
      {/* EmartInputUi에 적힌 placeholder가 출력되는데, 검색창을 여러개 만들어서 응용할 수 있다. */}
      <EmartInputUi 
        placeholder="검색어 입력!"
        getData={getData}
      />
    </MainScrollWrapper>
  );
}

export default MainSection;