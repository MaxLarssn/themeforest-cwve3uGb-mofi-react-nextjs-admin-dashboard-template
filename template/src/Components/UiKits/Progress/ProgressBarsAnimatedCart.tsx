import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ProgressBarsAnimated } from "@/Constant";
import { AnimatedData, AnimatedList } from "@/Data/Uikits/progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const ProgressBarsAnimatedCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ProgressBarsAnimated} span={AnimatedData} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progress color="primary" striped animated value="10" />
              {AnimatedList.map(({ color, value }, index) => (
                <Progress color={color} striped animated value={value} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
