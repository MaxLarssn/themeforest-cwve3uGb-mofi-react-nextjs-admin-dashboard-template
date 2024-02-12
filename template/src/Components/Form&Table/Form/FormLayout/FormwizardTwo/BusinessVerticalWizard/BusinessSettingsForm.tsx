import { ChangeEvent } from "react";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import { AccountName, Continue, Email, InqMail, Previous, ProjectDescription, Projects, SelectTeamWith } from "@/Constant";
import VariationBox from "./VariationBox";
import { BusinessFormCommonProps } from "@/Types/FormType";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setBusinessSettingsFormValues } from "@/Redux/Reducers/FormLayout/FormWizardTwoSlice";
import ShowError from "@/Components/Other/Authentication/RegisterWizard/common/ShowError";

const BusinessSettingsForm :React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const {businessSettingsFormValues} = useAppSelector((state)=>state.formWizardTwo)
  const { accountName, email, description } = businessSettingsFormValues;
  const dispatch = useAppDispatch()

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
   dispatch(setBusinessSettingsFormValues({...businessSettingsFormValues,[name]: value}));
  };

  const handleNextButton = () => {
    if (accountName !== "" && email !== "" && description !== "") callbackActive(3)
    else ShowError();
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()} className="g-3 needs-validation" noValidate>
      <Row>
        <Col md="6">
          <Label check>{AccountName}<span className="txt-danger">*</span></Label>
          <Input name="accountName" value={accountName} onChange={getUserData} type="text"/>
        </Col>
        <Col md="6">
          <Label check>{Email}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder={InqMail} name="email" value={email} onChange={getUserData}/>
        </Col>
        <Col xs="12" className="mt-3">
          <Label check>{ProjectDescription}</Label>
          <Input type="textarea" rows={3} name="description" value={description} onChange={getUserData}/>
        </Col>
        <Col xs="12">
          <section className="main-upgrade">
            <div>
              <i className="fa fa-rocket mt-3" />
              <h5 className="mb-2">{SelectTeamWith}<span className="txt-primary ms-1">{Projects}</span></h5>
              <p className="text-muted mb-2">Agile teams are cross-functional and made up of 5-11 on a regular basis team member.</p>
            </div>
            <VariationBox />
          </section>
        </Col>
        <Col xs="12" className="text-end">
          <Button onClick={() => callbackActive(1)} color="primary">{Previous}</Button>
          <Button className="ms-1" color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessSettingsForm;
