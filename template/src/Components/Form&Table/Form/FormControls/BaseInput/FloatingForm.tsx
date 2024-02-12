import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CheckMeOut, EmailAddress, EmailFloatingPlaceholder, FloatingPasswordPlaceholder, FormFloating, PasswordFloatingPlaceholder, SignInButton } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FloatingFormData } from "@/Data/Form&Table/Form";

const FloatingForm = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FormFloating} span={FloatingFormData} />
        <CardBody>
          <div className="card-wrapper border rounded-3">
            <Form className="floating-wrapper" onSubmit={(e)=>e.preventDefault()}>
              <Row className="g-3">
                <Col sm="12">
                  <FormGroup  floating className="mb-3">
                    <Input type="email" placeholder={EmailFloatingPlaceholder} />
                    <Label check>{EmailAddress}</Label>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mt-2">
                  <FormGroup floating>
                    <Input type="password" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>{FloatingPasswordPlaceholder}</Label>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mt-0">
                  <div className="form-check checkbox-checked">
                    <Input id="gridCheck" type="checkbox" />
                    <Label htmlFor="gridCheck" check>{CheckMeOut}</Label>
                  </div>
                </Col>
                <Col sm="12">
                  <Button color="primary">{SignInButton}</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FloatingForm;
