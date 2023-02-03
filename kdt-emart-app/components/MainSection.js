import { useEffect, useState } from "react";
import { Modal, View, Pressable, Text } from "react-native";
import styled from "styled-components/native";
import EmartButton from "./EmartButton";
import EmartInputUi from "./EmartInputUi";
import ProductList from "./widgets/ProductList";

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
  //useState(true)로 바꾸면 모달창이 자동으로 뜬다.
  const [modalIsView, setModalIsView] = useState(true);

  const getData = async (searchText) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    const json = await response.json();
    setData(json.products);
    console.log(json);

    //setData(searchText);
    //setModalIsView(true);
    console.log("Search Data", searchText)
  }

  useEffect(() => {
    console.log("I am MainSection components", data);
  }, [data])


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
            <Pressable onPress={() => setModalIsView(false)}>
              <EmartButton name="닫기" />
            </Pressable>
          </ModalView>
        </Modal>

        {/* EmartInputUi에 적힌 placeholder가 출력되는데, 검색창을 여러개 만들어서 응용할 수 있다. */}
        <EmartInputUi
          placeholder="검색어 입력!"
          getData={getData}
        />
        <Pressable onPress={() => { setModalIsView(true) }}>
          <EmartButton name="모달창 다시보기" />
        </Pressable>


        <Text>{data && `총 ${data.length}개의 상품을 찾았습니다.`}</Text>
        <ProductList data={data} />
      </MainScrollWrapper>
    </>
  );
}

export default MainSection;