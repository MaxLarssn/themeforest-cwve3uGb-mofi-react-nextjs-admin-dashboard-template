import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HoverData } from "@/Data/Miscellaneous/Gallery";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { ImageHoverEffectsCardBody } from "./ImageHoverEffectsCardBody";

const HoverEffectContainer = () => {
  return (
    <Container fluid>
      {HoverData.map((data, index) => (
        <Row key={index}>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={`Hover Effect ${data}`} />
              <ImageHoverEffectsCardBody data={data} />
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default HoverEffectContainer;
