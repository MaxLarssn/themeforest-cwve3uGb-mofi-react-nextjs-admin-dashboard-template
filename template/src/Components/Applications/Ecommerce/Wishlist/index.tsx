import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Wishlist } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { WishlistData } from "./WishlistData";

const WishlistContainer = () => {
  return  <Container fluid>
  <Row>
    <Col sm="12">
      <Card>
        <CommonCardHeader title={Wishlist} />
        <CardBody>
          <WishlistData />
        </CardBody>
      </Card>
    </Col>
  </Row>
</Container>
};

export default WishlistContainer;
