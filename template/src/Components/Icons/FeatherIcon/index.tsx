import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Card, Col, Container, Row } from "reactstrap";
import { FeatherIconCardBody } from "./FeatherIconCardBody";
import { FeatherIcons } from "@/Constant";

const FeatherIconContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={FeatherIcons} />
            <FeatherIconCardBody />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatherIconContainer;
