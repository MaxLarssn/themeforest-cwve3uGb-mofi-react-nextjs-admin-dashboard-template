import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SlideOnly } from "@/Constant";
import { SliesOnlyData, SliesOnlyDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const SlidesOnly = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={SlideOnly} span={SliesOnlyData} />
        <CardBody>
          <CommonCarousel data={SliesOnlyDataList} interval="2000"  />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SlidesOnly;
