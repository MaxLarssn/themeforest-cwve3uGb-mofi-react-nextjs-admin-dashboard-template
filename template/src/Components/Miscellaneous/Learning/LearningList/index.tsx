import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainLearningCards from "./MainLearningCards";
import SmallLearningCards from "./SmallLearningCards";
import CourseFilter from "./CourseFilter";

const LearningListContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-12">
          <Row>
            <MainLearningCards />
            <SmallLearningCards />
          </Row>
        </Col>
        <Col xl="3" className="xl-40 box-col-12 learning-filter">
          <CourseFilter />
        </Col>
      </Row>
    </Container>
  );
};

export default LearningListContainer;
