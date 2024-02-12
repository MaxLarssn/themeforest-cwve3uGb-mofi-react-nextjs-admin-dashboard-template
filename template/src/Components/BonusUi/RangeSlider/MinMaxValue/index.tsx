import { Card, CardBody, Col } from "reactstrap";
import { MinMaxValues } from "@/Constant";
import MinMaxValueForm from "./MinMaxValueForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const MinMaxValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MinMaxValues} />
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MinMaxValue;
