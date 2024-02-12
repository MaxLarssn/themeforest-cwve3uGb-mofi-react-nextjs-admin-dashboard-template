import { Card, CardBody, Col } from "reactstrap";
import { HoveringTimelines } from "@/Constant";
import { MeetupHoveringTimeline } from "./MeetupHoveringTimeline";
import { InterviewHoveringTimeline } from "./InterviewHoveringTimeline";
import { AnnualFunctionHoveringTimeline } from "./AnnualFunctionHoveringTimeline";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HoveringTimeLineData } from "@/Data/BonusUi/Timeline";

const HoveringTimeline = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={HoveringTimelines} span={HoveringTimeLineData} />
        <CardBody className="dark-timeline mb-4">
          <ul className="square-timeline simple-list">
            <AnnualFunctionHoveringTimeline />
            <InterviewHoveringTimeline />
            <MeetupHoveringTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HoveringTimeline;