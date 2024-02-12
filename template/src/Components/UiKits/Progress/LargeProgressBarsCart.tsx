import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LargeProgressBars } from "@/Constant";
import { LargeProgressData, LargeProgressList } from "@/Data/Uikits/progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const LargeProgressBarsCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={LargeProgressBars} span={LargeProgressData} />
        <CardBody className="progress-showcase mb-3">
          <Row>
            <Col>
              <Progress color="primary" value="25" className="lg-progress-bar">25%</Progress>
              {LargeProgressList.map(({ color, value, text }, index) => (
                <Progress color={color} value={value} className="lg-progress-bar" key={index}>
                  {text}
                </Progress>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
