import { Card, CardBody, Col } from "reactstrap";
import { VariationTimelines } from "@/Constant";
import { DynamicVariationTimeline } from "./DynamicVariationTimeline";
import { StaticVariationTimeline } from "./StaticVariationTimeline";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VariationTimeLineData } from "@/Data/BonusUi/Timeline";

const VariationTimeline = () => {
  return (
    <Col xxl="4" xl="5" className="notification box-col-12">
      <Card>
        <CommonCardHeader title={VariationTimelines} span={VariationTimeLineData} />
        <CardBody className="dark-timeline">
          <ul className="simple-list">
            <StaticVariationTimeline/>
            <DynamicVariationTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationTimeline;
