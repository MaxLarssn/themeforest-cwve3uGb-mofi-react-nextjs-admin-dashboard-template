import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DarkVariants } from "@/Constant";
import { DarkVariantData, DarkVariantDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const DarkVariant = () => {
  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={DarkVariants} span={DarkVariantData} />
        <CardBody>
          <CommonCarousel dark data={DarkVariantDataList} control caption lightCaption indecators />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkVariant;
