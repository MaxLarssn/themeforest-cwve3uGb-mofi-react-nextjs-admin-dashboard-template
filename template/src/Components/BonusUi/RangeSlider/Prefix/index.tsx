import { Card, CardBody, Col } from "reactstrap";
import { Prefixes } from "@/Constant";
import PrefixForm from "./PrefixForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const Prefix = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={Prefixes} />
        <CardBody className="mt-3 mb-3">
          <PrefixForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Prefix;
