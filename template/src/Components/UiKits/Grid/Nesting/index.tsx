import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Nesting } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import { NestingCardBody } from "./NestingCardBody";
import { NestingData } from "@/Data/Uikits/grid";

const NestingCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={Nesting} span={NestingData} />
        <CardBody className="grid-showcase">
          <Row className="g-3">
            <NestingCardBody />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingCart;
