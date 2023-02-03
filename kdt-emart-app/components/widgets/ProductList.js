import styled from "styled-components/native";
import ProductCard from "./ProductCard";

const ProductListWrapper = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:  space-between;
  align-items: center;
`;

const ProductList = ({ data }) => {
  return (
    <ProductListWrapper>
      {
        data && data.map( product => (
          <ProductCard key={product.id} product={product} />
        ))        
      }
    </ProductListWrapper>
  );
}

export default ProductList;