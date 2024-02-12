import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { NestingButton } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { DynamicNesting } from "./DynamicNesting";
import { StaticNesting } from "./StaticNesting";
import { NestingData } from "@/Data/Buttons/ButtonGroup";

const Nesting = () => {
  return (
    <>
      <Col lg="6">
        <Card className="height-equal">
          <CommonCardHeader title={NestingButton} span={NestingData} />
          <CardBody className="btn-group-wrapper">
            <StaticNesting />
            <DynamicNesting />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Nesting;
