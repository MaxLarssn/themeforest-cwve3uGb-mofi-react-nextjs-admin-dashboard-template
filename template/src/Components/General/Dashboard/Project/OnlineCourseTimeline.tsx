import { Card, CardBody, Col } from "reactstrap";
import { OnlineCourseTimelines } from "@/Constant";
import Timeline from "react-calendar-timeline";
import moment from "moment";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { OnlineTimelineGroup, OnlineTimelineItems } from "@/Data/General/Dashboard/Project";

const OnlineCourseTimeline = () => {
  return (
    <Col xl="4" md="6" className="col-xl-100 proorder-md-12">
      <Card>
        <DashboardCommonHeader title={OnlineCourseTimelines} />
        <CardBody className="overflow-auto theme-scrollbar">
          <div className="timeline-calendar custom-scrollbar">
            <div className="custom-calendar" id="calendar-container">
              <div className="time-line" id="calendar">
                <Timeline groups={OnlineTimelineGroup} items={OnlineTimelineItems} defaultTimeStart={moment().add(-12, "hour")} defaultTimeEnd={moment().add(12, "hour")}></Timeline>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OnlineCourseTimeline;
