import { verticalAlientment } from "@/Data/Uikits/grid";
import { Col, Row } from "reactstrap";

export const DynamicVerticalAlignment = () => {
  return (
    <>
      {verticalAlientment.map((item, index) => (
        <Col lg="4" key={index}>
          <Row className={`grid-vertical ${item} m-1 g-2 bg-light`}>
            <Col xs="6"><span className="bg-white">one column</span></Col>
            <Col xs="6"><span className="bg-white">two column</span></Col>
          </Row>
        </Col>
      ))}
    </>
  );
};
