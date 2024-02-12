import { Card, CardBody, Col, Row } from "reactstrap";
import { AnimatedButton } from "@/Constant";
import { AnimatedRadio } from "./AnimatedRadio";
import { AnimatedCheckbox } from "./AnimatedCheckbox";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedButtonData } from "@/Data/Form&Table/Form";

const AnimatedButtons = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={AnimatedButton} span={AnimatedButtonData} />
        <CardBody>
          <Row className="g-3">
            <AnimatedRadio />
            <AnimatedCheckbox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedButtons;
