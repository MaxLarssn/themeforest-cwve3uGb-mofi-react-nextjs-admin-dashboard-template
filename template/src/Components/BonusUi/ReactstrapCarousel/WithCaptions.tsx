import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WithCaption } from "@/Constant";
import { WithCaptionData, WithCaptionDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const WithCaptions = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithCaption} span={WithCaptionData} />
        <CardBody className="mt-2 mb-3">
          <CommonCarousel data={WithCaptionDataList} control indecators caption ride="carousel"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithCaptions;
