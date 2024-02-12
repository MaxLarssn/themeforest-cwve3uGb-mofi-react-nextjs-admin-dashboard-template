import React from "react";
import { Container, Row } from "reactstrap";
import ClipboardOnTextInput from "./ClipboardOnTextInput";
import ClipboardOnTextarea from "./ClipboardOnTextarea";
import ClipboardOnParagraph from "./ClipboardOnParagraph";
import CopyPortionFromParagraph from "./CopyPortionFromParagraph";

const ClipBoardContainer = () => {
  return (
    <Container fluid>
      <Row>
        <ClipboardOnTextInput />
        <ClipboardOnTextarea />
        <ClipboardOnParagraph />
        <CopyPortionFromParagraph />
      </Row>
    </Container>
  );
};

export default ClipBoardContainer;
