import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AutoPlayVariants } from "@/Constant";
import { AutoPlayData, AutoPlayDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const AutoPlayVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={AutoPlayVariants} span={AutoPlayData} />
        <CardBody>
          <CommonCarousel data={AutoPlayDataList} indecators interval="1500"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlayVariant;
