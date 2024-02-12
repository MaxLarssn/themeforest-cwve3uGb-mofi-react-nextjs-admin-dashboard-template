import React from "react";
import { Container, Row } from "reactstrap";
import Editor from "./Editor";
import InlineEditor from "./InlineEditor";

const CkEditorContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Editor />
        <InlineEditor />
      </Row>
    </Container>
  );
};

export default CkEditorContainer;
