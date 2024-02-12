import { Button, Card, CardBody, Col, Form, FormGroup, Input } from "reactstrap";
import { Bio, MyProfiles, Save } from "@/Constant";
import { UserFormHead } from "./UserFormHead";
import CommonUserFormGroup from "../Common/CommonUserFormGroup";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const MyProfile = () => {
  const BioText = "On the other hand, we denounce with righteous indignation";

  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={MyProfiles} />
        <CardBody>
          <Form onSubmit={(event) => event.preventDefault()}>
            <UserFormHead />
            <FormGroup>
              <h6 className="form-label">{Bio}</h6>
              <Input type="textarea" rows={5} defaultValue={BioText} />
            </FormGroup>
            <CommonUserFormGroup type="email" title="Email Address" placeholder="your-email@domain.com" />
            <CommonUserFormGroup type="password" title="Password" defaultValue="Password"/>
            <CommonUserFormGroup type="email" title="Website" placeholder="http://Uplor.com" />
            <div className="form-footer">
              <Button block color="primary">{Save}</Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MyProfile;
