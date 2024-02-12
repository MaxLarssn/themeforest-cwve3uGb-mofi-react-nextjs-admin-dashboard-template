import { Field, ErrorMessage } from "formik";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { ClientName, ClientNamePlaceholder, ProjectTitle, ProjectTitlePlaceholder } from "@/Constant";

export const TitleAndClientSection = () => {
  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{ProjectTitle}</Label>
            <Field name="title" type="text" className="form-control" placeholder={ProjectTitlePlaceholder} />
            <ErrorMessage name="title" component="span" className="text-danger" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{ClientName}</Label>
            <Field name="client" className="form-control" type="text" placeholder={ClientNamePlaceholder} />
            <ErrorMessage name="client" component="span" className="text-danger" />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};
