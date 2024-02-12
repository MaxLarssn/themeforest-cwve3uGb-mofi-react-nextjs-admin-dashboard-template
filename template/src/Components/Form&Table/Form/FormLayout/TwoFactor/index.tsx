import React from "react";
import { Container, Row } from "reactstrap";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import EmailVerification from "./EmailVerification";

const TwoFactorContainer = () => {
  return (
    <Container fluid>
      <Row>
        <TwoFactorAuthentication />
        <EmailVerification />
      </Row>
    </Container>
  );
};

export default TwoFactorContainer;
