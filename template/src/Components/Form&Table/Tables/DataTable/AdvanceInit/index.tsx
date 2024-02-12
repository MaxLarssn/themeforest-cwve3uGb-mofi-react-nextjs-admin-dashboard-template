import React from "react";
import { Container, Row } from "reactstrap";
import StockResult from "./StockResult";
import RowCreateCallback from "./RowCreateCallback";

const AdvanceInitContainer = () => {
  return (
    <Container fluid>
      <Row>
        <StockResult />
        <RowCreateCallback />
      </Row>
    </Container>
  );
};

export default AdvanceInitContainer;
