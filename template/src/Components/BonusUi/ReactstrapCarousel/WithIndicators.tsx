import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WithIndicator } from "@/Constant";
import { WithIndicatorData, WithIndicatorDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const WithIndicators = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithIndicator} span={WithIndicatorData} />
        <CardBody>
          <CommonCarousel data={WithIndicatorDataList} control indecators ride="carousel" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIndicators;
