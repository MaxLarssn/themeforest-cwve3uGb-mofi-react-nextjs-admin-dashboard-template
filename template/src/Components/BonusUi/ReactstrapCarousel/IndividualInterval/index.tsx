import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IndividualCarouselItemIntervals } from "@/Constant";
import { ItemIntervalData } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import IndividualIntervalBody from "./IndividualIntervalBody";

const IndividualInterval = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={IndividualCarouselItemIntervals} span={ItemIntervalData} />
        <CardBody>
          <IndividualIntervalBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndividualInterval;
