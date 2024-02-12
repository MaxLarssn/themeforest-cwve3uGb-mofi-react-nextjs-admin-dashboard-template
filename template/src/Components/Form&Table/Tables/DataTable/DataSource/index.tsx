import React from "react";
import { Container, Row } from "reactstrap";
import HtmlSourcedData from "./HtmlSourcedData";
import AjaxSourcedData from "./AjaxSourcedData";
import JavaScriptSourcedData from "./JavaScriptSourcedData";
import ServerSideProcessing from "./ServerSideProcessing";

const DataSourceContainer = () => {
  return (
    <Container fluid>
      <Row>
        <HtmlSourcedData />
        <AjaxSourcedData />
        <JavaScriptSourcedData />
        <ServerSideProcessing />
      </Row>
    </Container>
  );
};

export default DataSourceContainer;
