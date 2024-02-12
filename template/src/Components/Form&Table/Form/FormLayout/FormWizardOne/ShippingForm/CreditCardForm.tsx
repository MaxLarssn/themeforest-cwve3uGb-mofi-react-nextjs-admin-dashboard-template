import { AboveInformationCorrect, CVVNumber, CardHolder, CardHolderPlaceholder, CardNumber, CardNumberPlaceholder, Expiration, ExpiryPlaceholder, UploadDocumentation } from "@/Constant";
import { Col, Input, Label, FormGroup, Form, Row } from "reactstrap";

const CreditCardForm = () => {
  return (
    <Form className="g-3 needs-validation" noValidate>
      <Row>
        <Col md="12">
          <Label>{CardHolder}</Label>
          <Input type="text" required placeholder={CardHolderPlaceholder} />
        </Col>
        <Col md="4">
          <Label>{CardNumber}</Label>
          <Input type="text" required placeholder={CardNumberPlaceholder} />
          <div className="invalid-feedback">Please enter your valid number</div>
        </Col>
        <Col md="4">
          <Label>{Expiration}</Label>
          <Input type="number" required placeholder={ExpiryPlaceholder} />
        </Col>
        <Col md="4">
          <Label>{CVVNumber}</Label>
          <Input type="text" required />
        </Col>
        <Col xs="12">
          <Label>{UploadDocumentation}</Label>
          <Input type="file" required />
        </Col>
        <Col xs="12">
          <FormGroup check>
            <Input id="invalidCheck-c" type="checkbox" required />
            <Label check htmlFor="invalidCheck-c">{AboveInformationCorrect}</Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default CreditCardForm;
