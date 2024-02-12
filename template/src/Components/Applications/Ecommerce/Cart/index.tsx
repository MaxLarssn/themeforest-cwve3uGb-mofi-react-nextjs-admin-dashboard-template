import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Cart } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Container } from "reactstrap";
import { CartData } from "./CartData";

const CartContainer = () => {
  return (
    <Container fluid>
      <Col sm="12">
        <Card>
          <CommonCardHeader title={Cart} />
          <CardBody>
            <CartData />
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
};

export default CartContainer;
