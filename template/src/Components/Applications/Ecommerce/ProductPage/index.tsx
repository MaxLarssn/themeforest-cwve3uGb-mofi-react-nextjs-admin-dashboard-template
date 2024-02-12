import React, { useEffect } from "react";
import { Card, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSlider";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductSlice";
import ProductDetails from "./ProductDetails";
import BrandDetail from "./BrandDetail";
import ClothsDetails from "./ClothsDetails";

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, []);

  return (
    <Container fluid>
      <div>
        <Row>
          <ImageSlider />
          <ProductDetails />
          <BrandDetail />
        </Row>
        <Card>
          <Row className="product-page-main">
            <ClothsDetails />
          </Row>
        </Card>
      </div>
    </Container>
  );
};

export default ProductPageContainer;
