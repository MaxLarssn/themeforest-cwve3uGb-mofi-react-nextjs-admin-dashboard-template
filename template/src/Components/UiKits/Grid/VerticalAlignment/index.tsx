import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VerticalAlignment, VerticalAlignmentClass, VerticalAlignmentValueClass } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import { StaticVerticalAlignment } from "./StaticVerticalAlignment";
import { DynamicVerticalAlignment } from "./DynamicVerticalAlignment";
import GridCommonCardFooter from "../Common/GridCommonCardFooter";
import { AlientmentData } from "@/Data/Uikits/grid";

const VerticalAlignmentCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={VerticalAlignment} span={AlientmentData} />
        <CardBody className="grid-showcase mb-0">
          <Row>
            <StaticVerticalAlignment />
            <DynamicVerticalAlignment />
          </Row>
        </CardBody>
        <GridCommonCardFooter className={VerticalAlignmentClass} valueClass={VerticalAlignmentValueClass} />
      </Card>
    </Col>
  );
};

export default VerticalAlignmentCart;
