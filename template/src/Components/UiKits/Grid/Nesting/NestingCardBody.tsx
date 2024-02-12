import { Col, Row } from "reactstrap";

export const NestingCardBody = () => {
  return (
    <>
      <Col xs="3"><span>Level 1: .col-3</span></Col>
      <Col xs="9">
        <span className="pb-0">
          <Row className="g-2">
            <Col xs="5"><span className="border border-2">Level 2: .col-5</span></Col>
            <Col xs="7"><span className="border border-2">Level 2: .col-7</span></Col>
          </Row>
        </span>
      </Col>
      <Col xs="8">
        <span className="pb-0">
          <Row className="g-2">
            <Col sm="2" xs="4"><span className="border border-2">Level 1: .col-2</span></Col>
            <Col sm="10" xs="8"><span className="border border-2">Level 1: .col-10</span></Col>
          </Row>
        </span>
      </Col>
      <Col xs="4"><span>Level 2: .col-4 </span></Col>
    </>
  );
};
