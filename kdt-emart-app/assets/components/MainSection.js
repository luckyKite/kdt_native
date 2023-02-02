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
  return (
    <MainScrollWrapper>
      <EmartInputUi />
    </MainScrollWrapper>
  );
}

export default MainSection;