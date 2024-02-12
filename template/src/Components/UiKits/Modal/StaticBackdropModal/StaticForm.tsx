import { Button, Col, Input, Label, Row } from "reactstrap";
import { Formik,Form, Field } from "formik";
import { CheckMeOut, Email, Password, SignIn } from "@/Constant";
import { StaticModalToggleProp } from "@/Types/UikitsType";

export const StaticForm:React.FC<StaticModalToggleProp> = ({staticModalToggle}) => {
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={(value) => console.log(value)}>
     {()=>(
      <Form>
        <Row className="g-3">
          <Col md="12">
            <Label check>{Email}</Label>
            <Field className="form-control" name="email" type="email" placeholder="Enter Your Email" />
          </Col>
          <Col md="12">
            <Label check htmlFor="inputPassword4">{Password}</Label>
            <Field className="form-control" name="password" type="password" placeholder="Enter Your Password" />
          </Col>
          <Col xs="12">
            <div className="form-check">
              <Input type="checkbox" />
              <Label check htmlFor="gridCheck">{CheckMeOut}</Label>
            </div>
          </Col>
          <Col xs="12">
            <Button color="primary" onClick={staticModalToggle}>{SignIn}</Button>
          </Col>
      </Row>
    </Form>
     )}
    </Formik>
  );
};
