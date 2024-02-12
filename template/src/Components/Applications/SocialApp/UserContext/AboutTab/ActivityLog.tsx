import { ActivityLogHeading } from "@/Constant";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import MyActivity from "../../Common/MyActivity";

const ActivityLog = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader><h5>{ActivityLogHeading}</h5></CardHeader>
        <CardBody>
          <div className="activity-log">
            <MyActivity heading="Today" />
            <MyActivity heading="25 December" />
            <MyActivity heading="8 september" />
            <MyActivity heading="6 June" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityLog;
