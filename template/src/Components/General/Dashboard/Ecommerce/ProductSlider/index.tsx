import { Card, CardBody, Col, Row } from "reactstrap";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const ProductSlider = () => {
  return (
    <Col xl="6" lg="12">
      <Card>
        <CardBody className="product-slider">
          <Row className="align-items-center">
            <ProductImages />
            <ProductDetails />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductSlider;
