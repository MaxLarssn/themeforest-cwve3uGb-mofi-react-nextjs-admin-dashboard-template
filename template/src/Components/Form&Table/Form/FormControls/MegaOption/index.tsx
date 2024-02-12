import React from "react";
import { Container, Row } from "reactstrap";
import VariationRadio from "./VariationRadio";
import VariationCheckbox from "./VariationCheckbox";
import DefaultStyle from "./DefaultStyle";
import WithoutBordersStyle from "./WithoutBordersStyle";
import SolidBorderStyle from "./SolidBorderStyle";
import OfferStyleBorder from "./OfferStyleBorder";
import InlineStyle from "./InlineStyle";
import VerticalStyle from "./VerticalStyle";
import HorizontalStyle from "./HorizontalStyle";

const MegaOptionContainer = () => {
  return (
    <Container fluid>
      <Row>
        <VariationRadio />
        <VariationCheckbox />
        <DefaultStyle />
        <WithoutBordersStyle />
        <SolidBorderStyle />
        <OfferStyleBorder />
        <InlineStyle />
        <VerticalStyle />
        <HorizontalStyle />
      </Row>
    </Container>
  );
};

export default MegaOptionContainer;
