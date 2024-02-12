import { Card, Col, Form } from "reactstrap";
import { BasicFloatingInputControls } from "@/Constant";
import { BasicFloatingFooter } from "./BasicFloatingFooter";
import { BasicFloatingCardBody } from "./BasicFloatingCardBody";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FloatingInputData } from "@/Data/Form&Table/Form";

const BasicFloatingInputControl = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicFloatingInputControls} span={FloatingInputData} />
        <Form className="theme-form" onSubmit={(e)=>e.preventDefault()}>
          <BasicFloatingCardBody/>
          <BasicFloatingFooter />
        </Form>
      </Card>
    </Col>
  );
};

export default BasicFloatingInputControl;
