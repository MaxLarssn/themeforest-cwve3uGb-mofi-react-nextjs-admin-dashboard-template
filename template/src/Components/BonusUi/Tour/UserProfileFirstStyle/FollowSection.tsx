import { FollowerTour, FollowingTour } from "@/Constant";
import { Col, Row } from "reactstrap";

export const FollowSection = () => {
  return (
    <div className="follow">
      <Row>
        <Col className="border-end col-6">
          <div className="follow-num counter">25.8K</div>
          <span>{FollowerTour}</span>
        </Col>
        <Col className="col-6">
          <div className="follow-num counter">65.2M</div>
          <span>{FollowingTour}</span>
        </Col>
      </Row>
    </div>
  );
};
