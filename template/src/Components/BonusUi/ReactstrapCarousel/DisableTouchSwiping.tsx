import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisableTouchSwipings } from "@/Constant";
import { DisableTouchData, DisableTouchDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const DisableTouchSwiping = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={DisableTouchSwipings} span={DisableTouchData} />
        <CardBody>
          <CommonCarousel data={DisableTouchDataList} control/>
        </CardBody>
      </Card>
    </Col>
  )
};

export default DisableTouchSwiping;
