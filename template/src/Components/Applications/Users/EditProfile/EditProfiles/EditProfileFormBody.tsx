import { CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { AboutMe, Address, City, Company, Country, Email, EmailAddress, FirstName, LastName, PostalCode, Username, ZipCode } from "@/Constant";
import CommonUserFormGroup from "../Common/CommonUserFormGroup";

export const EditProfileFormBody = () => {
  return (
    <CardBody>
      <Row>
        <Col md="5">
          <CommonUserFormGroup type="text" title={Company} placeholder={Company} />
        </Col>
        <Col sm="6" md="3">
          <CommonUserFormGroup type="text" title={Username} placeholder={Username} />
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="email" title={EmailAddress} placeholder={Email} />
        </Col>
        <Col sm="6" md="6">
          <CommonUserFormGroup type="text" title={FirstName} placeholder={FirstName} />
        </Col>
        <Col sm="6" md="6">
          <CommonUserFormGroup type="text" title={LastName} placeholder={LastName} />
        </Col>
        <Col md="12">
          <CommonUserFormGroup type="text" title={Address} placeholder={Address} />
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title={City} placeholder={City} />
        </Col>
        <Col sm="6" md="3">
          <CommonUserFormGroup type="text" title={PostalCode} placeholder={ZipCode} />
        </Col>
        <Col md="5">
          <FormGroup>
            <Label check>{Country}</Label>
            <Input type="select" className="rounded-2 btn-square">
              <option value="">--Select--</option>
              <option value="Germany">Germany</option>
              <option value="Canada">Canada</option>
              <option value="Usa">Usa</option>
              <option value="Aus">Aus</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md="12">
          <CommonUserFormGroup type="textarea" title={AboutMe} placeholder="Enter About your description" row={4}  />
        </Col>
      </Row>
    </CardBody>
  );
};
