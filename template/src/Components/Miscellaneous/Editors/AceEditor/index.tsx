import React from "react";
import { Container, Row } from "reactstrap";
import JavascriptMode from "./JavascriptMode";
import HtmlMode from "./HtmlMode";
import CssMode from "./CssMode";
import JavaMode from "./JavaMode";

const AceEditorContainer = () => {
  return (
    <Container fluid>
      <Row>
        <JavascriptMode />
        <HtmlMode />
        <CssMode />
        <JavaMode />
      </Row>
    </Container>
  );
};

export default AceEditorContainer;
