import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import EmailSidebar from "./EmailSidebar";
import EmailRightSide from "./EmailRightSide";

const LatterBoxContainer = () => {
  const [navId, setNavId]= useState("1");

  return (
    <Container fluid>
      <div className="email-wrap email-main-wrapper">
        <Row>
          <EmailSidebar navId={navId} setNavId={setNavId} />
          <EmailRightSide navId={navId} />
        </Row>
      </div>
    </Container>
  );
};

export default LatterBoxContainer;
