import { Card, CardBody, Col } from "reactstrap";
import { PaginationSizings } from "@/Constant";
import { DynamicPaginationSizing } from "./DynamicPaginationSizing";
import { StaticPaginationSizing } from "./StaticPaginationSizing";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SizingPaginationData } from "@/Data/BonusUi/Paginations";

const PaginationSizing = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={PaginationSizings} span={SizingPaginationData} />
        <CardBody className="pb-4">
          <StaticPaginationSizing />
          <DynamicPaginationSizing />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizing;
