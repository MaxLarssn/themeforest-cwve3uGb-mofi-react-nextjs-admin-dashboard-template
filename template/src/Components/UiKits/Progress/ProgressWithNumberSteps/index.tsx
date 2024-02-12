import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ProgressWithNumberSteps } from "@/Constant";
import { Col, Card, CardBody, Progress, Button } from "reactstrap";
import { DynamicProgressWithNumberSteps } from "./DynamicProgressWithNumberSteps";
import { ProgressNumberData } from "@/Data/Uikits/progress";

export const ProgressWithNumberStepsCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ProgressWithNumberSteps} span={ProgressNumberData} />
        <CardBody className="mb-1">
          <div className="position-relative m-3 progress-number">
            <Progress value="50" className="progress-wrapper" />
            <Button size="sm" color="primary" className="position-absolute top-0 start-0 p-0 translate-middle rounded-circle txt-light">1</Button>
            <DynamicProgressWithNumberSteps />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};