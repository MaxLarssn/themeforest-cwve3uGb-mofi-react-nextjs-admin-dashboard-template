import { EmailSubInputType } from "@/Types/LatterBoxType";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const EmailSubInput :React.FC<EmailSubInputType> = ({ccShow,bccShow}) => {
  return (
    <>
      <FormGroup>
        <Row className={`collapse ${ccShow ? "show" : ""}`} id="collapseCc">
          <Col sm="2">
            <Label className="col-form-label" for="composeTo"> Cc: </Label>
          </Col>
          <Col sm="10">
            <Input id="composeTo" type="email" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row className={`collapse ${bccShow ? "show" : ""}`} id="collapseBcc">
          <Col sm="2">
            <Label className="col-form-label" for="composeTo"> Bcc: </Label>
          </Col>
          <Col sm="10">
            <Input id="composeTo" type="email" />
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default EmailSubInput;
