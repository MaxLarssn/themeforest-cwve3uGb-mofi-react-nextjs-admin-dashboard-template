import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { UploadCoverLetterJob, UploadRecommendationsJob, UploadYourCvJob } from "@/Constant";

const UploadFileClass = () => {
  return (
    <Form className="theme-form mb-0">
      <Row>
        <Col>
          <FormGroup>
            <Label className="col-form-label pt-0" check>{UploadCoverLetterJob}:<span className="font-danger">*</span></Label>
            <Input type="file" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label className="col-form-label pt-0" check>{UploadYourCvJob}:<span className="font-danger">*</span></Label>
            <Input  type="file" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup className="mb-0">
            <Label className="col-form-label pt-0" check>{UploadRecommendationsJob}:</Label>
            <Input type="file" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default UploadFileClass;
