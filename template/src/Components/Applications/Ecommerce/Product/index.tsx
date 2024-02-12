import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import React, { useEffect } from "react";
import { Container } from "reactstrap";
import ProductFeatures from "./ProductFeatures";
import { fetchProductApiData } from "@/Redux/Reducers/ProductSlice";
import ProductGrid from "./ProductGrid";

const ProductContainer = () => {
  const { sideBarOn } = useAppSelector((state) => state.filterData);
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchProductApiData())
  },[])

  return (
    <Container fluid className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}>
      <div className="product-grid">
        <ProductFeatures />
        <ProductGrid />
      </div>
    </Container>
  );
};

export default ProductContainer;
