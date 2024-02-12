import { Card, CardBody, Col, Row } from "reactstrap";
import { AdditiveBorders } from "./AdditiveBorder";
import { SubtractiveBorders } from "./SubtractiveBorder";
import { AdditiveRadius } from "./AdditiveRadius";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BordersAndDisplays } from "@/Constant";
import { BorderData } from "@/Data/Uikits/helperclass";

const BorderCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BordersAndDisplays} span={BorderData} headClass="card-no-border pb-0"/>
        <CardBody>
          <Row className="g-3">
            <AdditiveBorders />
            <SubtractiveBorders />
            <AdditiveRadius />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderCart;
