import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AboveInformationCorrect, AadharPlaceholder, CVVNumber, CardNumber, Expiration, ExpiryPlaceholder, PlaceHolderName, PlaceholderName, UploadDocumentation } from "@/Constant";
import { NumberingWizardPropsType } from "@/Types/FormType";

const CartInfoForm: React.FC<NumberingWizardPropsType> = ({ getUserData, basicInputFormValue }) => {
  const { placeHolderName, cardNumber, expiration, cvvNumber } = basicInputFormValue;

  return (
    <Form className="stepper-two needs-validation custom-input" noValidate>
      <Row>
        <Col md="12">
          <FormGroup>
            <Label check>{PlaceHolderName}</Label>
            <Input name="placeHolderName" value={placeHolderName} onChange={getUserData} type="text" placeholder={PlaceholderName} />
          </FormGroup>
        </Col>
        <Col xxl="4" sm="6">
          <FormGroup>
            <Label check>{CardNumber}</Label>
            <Input name="cardNumber" value={cardNumber} onChange={getUserData} type="text" placeholder={AadharPlaceholder} />
          </FormGroup>
        </Col>
        <Col xxl="4" sm="6">
          <FormGroup>
            <Label check>{Expiration}</Label>
            <Input name="expiration" value={expiration} onChange={getUserData} type="number" placeholder={ExpiryPlaceholder} />
          </FormGroup>
        </Col>
        <Col xxl="4">
          <FormGroup>
            <Label check>{CVVNumber}</Label>
            <Input name="cvvNumber" value={cvvNumber} onChange={getUserData} type="text" />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check>{UploadDocumentation}</Label>
            <Input name="uploadDocumentation" onChange={getUserData} type="file" />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup check>
            <Input id="invalidCheck-a" name="informationCheckBox" onChange={getUserData} type="checkbox" required />
            <Label htmlFor="invalidCheck-a" check>
              {AboveInformationCorrect}
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default CartInfoForm;
