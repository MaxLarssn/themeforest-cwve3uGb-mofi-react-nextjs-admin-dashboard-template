import { Card, CardBody, Col } from "reactstrap";
import { NegativeValues } from "@/Constant";
import NegativeValueForm from "./NegativeValueForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const NegativeValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={NegativeValues} />
        <CardBody>
          <NegativeValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NegativeValue;
