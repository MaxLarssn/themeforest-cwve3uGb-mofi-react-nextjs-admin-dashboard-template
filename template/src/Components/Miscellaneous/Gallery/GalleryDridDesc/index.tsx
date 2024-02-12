import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { GalleryGridWithDescriptionCap } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { DescriptionMyGallery } from "./DescriptionMyGallery";

const GalleryDridDescContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={GalleryGridWithDescriptionCap} />
            <CardBody className="my-gallery gallery-with-description">
              <Row>
                <DescriptionMyGallery />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryDridDescContainer;
