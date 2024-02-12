import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SmallProgressBars } from "@/Constant";
import { SmallProgressData, SmallProgressList } from "@/Data/Uikits/progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const SmallProgressBarsCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={SmallProgressBars} span={SmallProgressData} />
        <CardBody className="progress-showcase progress-b-space">
          <Row>
            <Col>
              <Progress color="primary" animated striped bar value="30" max={100} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4">
                <span className="txt-primary progress-label">30 MB Data</span>
                <span className="animate-circle"></span>
              </Progress>
              {SmallProgressList.map(({ value, title }, index) => (
                <Progress color="primary" animated striped bar value={value} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4" key={index}>
                  <span className="txt-primary progress-label">{title}</span>
                  <span className="animate-circle"></span>
                </Progress>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};