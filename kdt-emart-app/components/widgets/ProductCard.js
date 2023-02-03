import styled from "styled-components/native";

const ProductCardWrapper = styled.View`
  width: 48%;
  height: 200px;
  backgroung-color: #fff;
  border-radius: 5px;
  margin: 1px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius:10px;
`;

const ProductTitle = styled.Text`
  margin-top: 10px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color:  #222;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductCardWrapper>
      <ProductImage source={{uri: product.thumbnail}} />
      <ProductTitle>{product.title}</ProductTitle>
    </ProductCardWrapper>
  );
}

export default ProductCard;