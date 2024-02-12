import { Col, Container, Row } from "reactstrap";
import { BasicProgressBarsCart } from "./BasicProgressBarsCart";
import { ProgressBarsStripedCart } from "./ProgressBarsStripedCart";
import { ProgressBarsAnimatedCart } from "./ProgressBarsAnimatedCart";
import { MultipleBarsCart } from "./MultipleBarsCart";
import { ProgressWithNumberStepsCart } from "./ProgressWithNumberSteps";
import { SmallProgressBarsCart } from "./SmallProgressBarsCart";
import { LargeProgressBarsCart } from "./LargeProgressBarsCart";
import { CustomHeightProgressBarsCart } from "./CustomHeightProgressBarsCart";
import { CustomProgressBarsCart } from "./CustomProgressBarsCart";

const ProgressContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <BasicProgressBarsCart />
          <Row>
            <ProgressBarsStripedCart />
            <ProgressBarsAnimatedCart />
          </Row>
          <Row>
            <MultipleBarsCart />
            <ProgressWithNumberStepsCart />
          </Row>
          <CustomProgressBarsCart />
          <Row>
            <SmallProgressBarsCart />
            <LargeProgressBarsCart />
          </Row>
          <CustomHeightProgressBarsCart />
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressContainer;
