import React from "react";
import { Container, Row } from "reactstrap";
import NumberingWizard from "./NumberingWizard";
import StudentValidationForm from "./StudentValidationForm";
import VerticalValidationWizard from "./VerticalValidationWizard";
import ShippingForm from "./ShippingForm";

const FormWizardOneContainer = () => {
  return (
    <Container fluid>
      <Row>
        <NumberingWizard />
        <StudentValidationForm />
        <VerticalValidationWizard />
        <ShippingForm />
      </Row>
    </Container>
  );
};

export default FormWizardOneContainer;
