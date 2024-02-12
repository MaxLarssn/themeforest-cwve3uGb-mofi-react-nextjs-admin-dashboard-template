import React from "react";
import { Container, Row } from "reactstrap";
import WorldMap from "./WorldMap";
import USAMap from "./USAMap";
import IndiaMap from "./IndiaMap";
import AustraliaMap from "./AustraliaMap";

const LeafletMapContainer = () => {
  return (
    <Container fluid>
      <Row>
        <WorldMap />
        <USAMap />
        <IndiaMap />
        <AustraliaMap/>
      </Row>
    </Container>
  );
};

export default LeafletMapContainer;
