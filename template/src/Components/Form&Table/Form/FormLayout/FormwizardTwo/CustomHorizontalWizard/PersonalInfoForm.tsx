import { ChangeEvent } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AgreeToTermsAndConditions, MofiMail, ContactNumber, Continue, Email, EnterFirstName, EnterLastName, EnterNumber, FirstName, LastName, State, ZipCode } from "@/Constant";
import { BusinessFormCommonProps } from "@/Types/FormType";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setPersonalDetailsForm } from "@/Redux/Reducers/FormLayout/FormWizardTwoSlice";
import ShowError from "@/Components/Other/Authentication/RegisterWizard/common/ShowError";

const PersonalInfoForm :React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const dispatch=useAppDispatch()
  const {personalDetailsForm} = useAppSelector((state)=>state.formWizardTwo) 
  const { firstName, lastName, contact, email, state, zip } =personalDetailsForm;

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    dispatch(setPersonalDetailsForm({ ...personalDetailsForm, [name]: value }));
  };

  const handleNextButton = () => {
    if (firstName !== "" && lastName !== "" && contact !== "" && email !== "" && state !== "" && zip !== "") callbackActive(2)
    else ShowError();
  };
  
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className="g-3">
        <Col xl="4" sm="6">
          <Label check>{FirstName}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder={EnterFirstName} value={firstName} name="firstName" onChange={getUserData}/>
        </Col>
        <Col xl="4" sm="6">
          <Label check>{LastName}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder={EnterLastName} value={lastName} name="lastName" onChange={getUserData}/>
        </Col>
        <Col xl="4" xs="12">
          <Label check>{Email}<span className="txt-danger">*</span></Label>
          <Input id="customEmail" type="email" placeholder={MofiMail} value={email} name="email" onChange={getUserData}/>
        </Col>
        <Col xl="5" sm="4">
          <Label check>{State}</Label>
          <Input type="select" value={state} name="state" onChange={getUserData}>
            <option value="">Choose...</option>
            <option value="USA">USA </option>
            <option value="U.K">U.K </option>
            <option value="U.S">U.S</option>
          </Input>
        </Col>
        <Col xl="3" sm="4">
          <Label check>{ZipCode}</Label>
          <Input type="text" value={zip} name="zip" onChange={getUserData} />
        </Col>
        <Col sm="4">
          <Label check>{ContactNumber}</Label>
          <Input type="number" placeholder={EnterNumber} onChange={getUserData} name="contact" value={contact}/>
        </Col>
        <Col xs="12">
          <FormGroup check>
            <Input id="invalid-check-wizard" type="checkbox" />
            <Label className="mb-0 d-block" htmlFor="invalid-check-wizard" check>{AgreeToTermsAndConditions}</Label>
          </FormGroup>
        </Col>
        <Col xs="12" className="text-end mt-3">
          <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PersonalInfoForm;
