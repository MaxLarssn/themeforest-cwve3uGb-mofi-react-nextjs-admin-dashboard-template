import { Card, CardBody, Col, Row } from "reactstrap";
import { InlineInputType } from "@/Constant";
import { InlineSwitche } from "./InlineSwitche";
import { InlineRadios } from "./InlineRadios";
import { InlineCheckboxs } from "./InlineCheckboxs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InlineInputData } from "@/Data/Form&Table/Form";

const InlineInputTypes = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InlineInputType} span={InlineInputData} />
        <CardBody>
          <Row className="g-3">
            <InlineCheckboxs />
            <InlineRadios />
            <InlineSwitche />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineInputTypes;
