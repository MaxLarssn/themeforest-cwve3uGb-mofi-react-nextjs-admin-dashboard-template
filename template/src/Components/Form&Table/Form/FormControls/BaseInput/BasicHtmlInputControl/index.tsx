import { Card, Col, Form } from "reactstrap";
import { BasicHtmlInputControls } from "@/Constant";
import { BasicHtmlCardBody } from "./BasicHtmlCardBody";
import { BasicHtmlCardFooter } from "./BasicHtmlCardFooter";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicHtmlInputControlData } from "@/Data/Form&Table/Form";

const BasicHtmlInputControl = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicHtmlInputControls} span={BasicHtmlInputControlData} />
        <Form className="theme-form" onSubmit={(e)=>e.preventDefault()}>
          <BasicHtmlCardBody/>
          <BasicHtmlCardFooter/>
        </Form>
      </Card>
    </Col>
  );
};

export default BasicHtmlInputControl;
