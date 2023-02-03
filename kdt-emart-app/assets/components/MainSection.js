import { useEffect, useState } from "react";
import { Modal, View, Pressable, Text } from "react-native";
import styled from "styled-components/native";
import EmartInputUi from "./EmartInputUi";

const MainScrollWrapper = styled.ScrollView`
  width: 100%;
  flex: 24;
  padding: 10px 16px;
  box-sizing: border-box;
  background-color: #f1f1f1;
`;

const ModalView = styled.View`
  margin: auto;
  width:80%;
  height: 300px;
  background-color: #222;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const MainSection = () => {

  const [data, setData] = useState();
  const [modalIsView, setModalIsView] = useState(false);

  const getData = async (searchText) => { 
    setData(searchText);
    setModalIsView(true);
    console.log("Search Data", searchText)
  }

  useEffect( ()=> {
    console.log("I am MainSection components", data);
  },[data])


  return (
    <>
    <MainScrollWrapper>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalIsView}
          onRequestClose={() => {
            setModalIsView(false);
          }}
      >
        <ModalView>
          <Pressable onPress={()=> setModalIsView(false)}>
            <Text style={{color: '#fff'}}>Close</Text>
          </Pressable>
        </ModalView>
      </Modal>

      {/* EmartInputUi에 적힌 placeholder가 출력되는데, 검색창을 여러개 만들어서 응용할 수 있다. */}     
      <EmartInputUi 
        placeholder="검색어 입력!"
        getData={getData}
      />
    </MainScrollWrapper>
    </>
  );
}

export default MainSection;