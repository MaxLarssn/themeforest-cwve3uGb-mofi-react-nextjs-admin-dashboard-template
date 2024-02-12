import React from "react";
import { Container } from "reactstrap";
import MdeExampleOne from "./MdeExampleOne";
import MdeExampleTwo from "./MdeExampleTwo";

const MdeEditorContainer = () => {
  return (
    <Container fluid>
      <MdeExampleOne />
      <MdeExampleTwo />
    </Container>
  );
};

export default MdeEditorContainer;
