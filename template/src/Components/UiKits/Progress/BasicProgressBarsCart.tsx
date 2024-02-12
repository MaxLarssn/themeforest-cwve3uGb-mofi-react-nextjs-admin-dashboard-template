import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicProgressBars } from "@/Constant";
import { BasicProgressData, BasicProgressList } from "@/Data/Uikits/progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const BasicProgressBarsCart = () => {
  return (
    <Card>
      <CommonCardHeader title={BasicProgressBars} span={BasicProgressData} />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <Progress value="0" />
            {BasicProgressList.map(({ color, value, text }, index) => (
              <Progress color={color} value={value} key={index}>
                {text && text}
              </Progress>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
