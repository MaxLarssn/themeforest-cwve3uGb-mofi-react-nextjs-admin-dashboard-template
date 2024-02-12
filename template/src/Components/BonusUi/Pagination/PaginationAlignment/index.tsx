import { Card, CardBody, Col } from "reactstrap";
import { PaginationAlignments } from "@/Constant";
import { StaticPaginationAlignment } from "./StaticPaginationAlignment";
import { DynamicPaginationAlignment } from "./DynamicPaginationAlignment";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AlignmentPaginationData } from "@/Data/BonusUi/Paginations";

const PaginationAlignment = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={PaginationAlignments} span={AlignmentPaginationData} />
        <CardBody>
          <StaticPaginationAlignment />
          <DynamicPaginationAlignment/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlignment;
