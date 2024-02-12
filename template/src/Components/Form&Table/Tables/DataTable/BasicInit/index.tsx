import React from "react";
import { Container, Row } from "reactstrap";
import { ZeroConfigurationTable } from "./ZeroConfigurationTable";
import StateSaving from "./StateSaving";
import ScrollVerticalDynamicHeight from "./ScrollVerticalDynamicHeight";

const BasicInitContainer = () => {
  return (
    <Container fluid>
      <Row>
        <ZeroConfigurationTable />
        <StateSaving />
        <ScrollVerticalDynamicHeight />
      </Row>
    </Container>
  );
};

export default BasicInitContainer;
