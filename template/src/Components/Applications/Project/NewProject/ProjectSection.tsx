import { ErrorMessage, Field } from "formik";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { ProjectStatus, ProjectProgress, ProjectProgressPlaceholder, FixPrice, Hourly, Priority, Low, Medium, High, Urgent, PriorityPlaceholder } from "@/Constant";

export const ProjectSection = () => {
  return (
    <Row>
      <Col sm="4">
        <FormGroup>
          <Label check>{ProjectProgress}</Label>
          <Field name="progress" className="form-control" type="number" placeholder={ProjectProgressPlaceholder} />
          <ErrorMessage name="progress" component="span" className="text-danger"/>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <Label check>{ProjectStatus}</Label>
          <Field name="type" as="select" className="form-control form-select">
            <option value={Hourly}>{Hourly}</option>
            <option value={FixPrice}>{FixPrice}</option>
          </Field>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <Label>{Priority}</Label>
          <Field name="priority" as="select" placeholder={PriorityPlaceholder} className="form-control form-select">
            <option value={Low}>{Low}</option>
            <option value={Medium}>{Medium}</option>
            <option value={High}>{High}</option>
            <option value={Urgent}>{Urgent}</option>
          </Field>
        </FormGroup>
      </Col>
    </Row>
  );
};
