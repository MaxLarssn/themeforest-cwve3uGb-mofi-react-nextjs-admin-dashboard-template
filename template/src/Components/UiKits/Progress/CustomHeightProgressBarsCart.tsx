import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomHeightProgressBars } from "@/Constant";
import { HeightProgressData, HeightProgressList } from "@/Data/Uikits/progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const CustomHeightProgressBarsCart = () => {
  return (
    <Card>
      <CommonCardHeader title={CustomHeightProgressBars} span={HeightProgressData} />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <Progress color="primary" value="25" style={{ height: "1px" }} />
            {HeightProgressList.map(({ color, value, height }, index) => (
              <Progress color={color} value={value} style={{ height: `${height}` }} key={index} />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
