import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MasonryGalleryCap } from "@/Constant";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { MasonryGalleryBody } from "./MasonryGalleryBody";

const MasonaryGalleryContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card className="pb-3">
            <CommonCardHeader title={MasonryGalleryCap} />
            <MasonryGalleryBody />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MasonaryGalleryContainer;
