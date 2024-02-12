import { Card, CardBody, Col, Row } from "reactstrap";
import { RunningEvent } from "@/Constant";
import UserEvents from "./UserEvents";
import RunningEventsImage from "./RunningEventsImage";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const RunningEvents = () => {
  return (
    <Col xl="5" className="col-xl-70 proorder-md-13">
      <Card>
        <DashboardCommonHeader title={RunningEvent} />
        <CardBody className="rinning-col">
          <Row>
            <UserEvents />
            <RunningEventsImage />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RunningEvents;
