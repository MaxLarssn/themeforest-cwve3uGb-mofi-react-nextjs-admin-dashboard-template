import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalAlignment, HorizontalAlignmentClass, HorizontalAlignmentValueClass } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { StaticHorizontalAlignment } from "./StaticHorizontalAlignment";
import GridCommonCardFooter from "../Common/GridCommonCardFooter";
import { DynamicHorizontalAlignment } from "./DynamicHorizontalAlignment";
import { AlientmentData } from "@/Data/Uikits/grid";

const HorizontalAlignmentCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={HorizontalAlignment} span={AlientmentData} />
        <CardBody className="grid-showcase grid-align">
          <StaticHorizontalAlignment />
          <DynamicHorizontalAlignment />
        </CardBody>
        <GridCommonCardFooter className={HorizontalAlignmentClass} valueClass={HorizontalAlignmentValueClass} />
      </Card>
    </Col>
  );
};

export default HorizontalAlignmentCart;
