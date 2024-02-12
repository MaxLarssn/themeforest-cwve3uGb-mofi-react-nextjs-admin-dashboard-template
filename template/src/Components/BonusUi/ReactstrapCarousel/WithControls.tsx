import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WithControl } from "@/Constant";
import { WithControlData, WithControlDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const WithControls = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithControl} span={WithControlData} />
        <CardBody>
          <CommonCarousel data={WithControlDataList} control interval="2000" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithControls;