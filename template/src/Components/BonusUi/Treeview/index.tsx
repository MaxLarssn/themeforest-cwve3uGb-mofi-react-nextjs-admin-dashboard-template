import { Col, Container, Row } from "reactstrap";
import DisabledTree from "./DisabledTree";
import BasicTrees from "./BasicTrees";

const TreeViewContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="6">
          <BasicTrees />
        </Col>
        <Col md="6">
          <DisabledTree />
        </Col>
      </Row>
    </Container>
  );
};

export default TreeViewContainer;
