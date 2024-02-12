import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BackgroundColors } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DarkBackgrounds } from "./DarkBackground";
import { LightBackgrounds } from "./LightBackgrounds";
import { ExtendedBackgroundColors } from "./ExtendedBackgroundColors";
import { BackgroundData } from "@/Data/Uikits/helperclass";

const BackgroundColorsCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BackgroundColors} span={BackgroundData} headClass="card-no-border pb-0"/>
        <CardBody>
          <Row className="g-3">
            <DarkBackgrounds />
            <LightBackgrounds />
            <ExtendedBackgroundColors />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BackgroundColorsCart;
