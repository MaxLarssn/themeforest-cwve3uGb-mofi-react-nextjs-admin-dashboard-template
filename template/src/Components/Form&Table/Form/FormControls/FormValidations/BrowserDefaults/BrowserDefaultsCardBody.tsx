import { Button, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AgreeToThePolicies, ChooseFile, Description, EmailAddress, EmailPlaceholder, FirstName, FirstNamePlaceholder, PasswordBrowserDefault, SelectYourPaymentMethod, State, StateChoose, SubmitButton, SureInformation } from "@/Constant";
import { BrowserRadioList, BrowserStateList } from "@/Data/Form&Table/Form";

export const BrowserDefaultsCardBody = () => {
  return (
    <CardBody className="custom-input">
      <Form className="g-3" onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col sm="12">
            <FormGroup>
              <Label htmlFor="first-name">{FirstName}</Label>
              <Input type="text" placeholder={FirstNamePlaceholder} required />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input type="email" placeholder={EmailPlaceholder} required />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label htmlFor="inputPassword2">{PasswordBrowserDefault}</Label>
              <Input id="inputPassword2" type="password" required />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label>{State}</Label>
              <Input type="select" id="validationDefault04" required>
                <option>{StateChoose}</option>
                {BrowserStateList.map((item, index) => (<option value={item} key={index}>{item}</option>))}
              </Input>
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label>{ChooseFile}</Label>
              <Input type="file" required />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <div className="card-wrapper border rounded-3 checkbox-checked">
                <h6 className="sub-title">{SelectYourPaymentMethod}</h6>
                <div className="radio-form">
                  {BrowserRadioList.map(({ id, defaultChecked, text }, index) => (
                    <FormGroup check key={index}>
                      <Input type="radio" name="flexRadioDefault" id={`flexRadioDefault${id}`} required defaultChecked={defaultChecked} />
                      <Label check htmlFor={`flexRadioDefault${id}`}>{text}</Label>
                    </FormGroup>
                  ))}
                </div>
              </div>
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label>{Description}</Label>
              <Input type="textarea" rows={3} />
            </FormGroup>
          </Col>
          <Col sm="12" className="checkbox-checked">
            <Input id="flexCheckDefault" type="checkbox" />
            <Label className="ms-2" htmlFor="flexCheckDefault" check>{AgreeToThePolicies}</Label>
          </Col>
          <Col sm="12">
            <FormGroup className="form-switch" check>
              <Input id="flexSwitchCheckDefault" type="checkbox" role="switch" required />
              <Label htmlFor="flexSwitchCheckDefault" check>{SureInformation}</Label>
            </FormGroup>
          </Col>
          <Col sm="12">
            <Button color="primary">{SubmitButton}</Button>
          </Col>
        </Row>
      </Form>
    </CardBody>
  );
};
