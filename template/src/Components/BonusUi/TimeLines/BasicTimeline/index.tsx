import { Card, CardBody, Col } from "reactstrap";
import { DynamicBasicTimeline } from "./DynamicBasicTimeline";
import { StaticBasicTimeline } from "./StaticBasicTimeline";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTimelines } from "@/Constant";
import { BasicTimeLineData } from "@/Data/BonusUi/Timeline";

const BasicTimeline = () => {
  return (
    <Col xl="6" className="notification main-timeline">
      <Card>
        <CommonCardHeader title={BasicTimelines} span={BasicTimeLineData} />
        <CardBody className="dark-timeline mb-0">
          <ul>
            <StaticBasicTimeline />
            <DynamicBasicTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTimeline;
