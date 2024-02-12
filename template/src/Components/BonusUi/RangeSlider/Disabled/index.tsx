import { Card, CardBody, Col } from "reactstrap";
import { Disable } from "@/Constant";
import DisabledForm from "./DisabledForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const Disabled = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={Disable} />
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Disabled;
