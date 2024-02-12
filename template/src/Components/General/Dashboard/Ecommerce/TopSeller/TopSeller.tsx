import { Card, CardBody, Col } from "reactstrap";
import { TopSellerMonth } from "@/Constant";
import TopSellerTable from "./TopSellerTable";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const TopSeller = () => {
  return (
    <Col xl="6" lg="12">
      <Card>
        <DashboardCommonHeader title={TopSellerMonth} />
        <CardBody className="pt-0 seller-month px-0">
          <TopSellerTable />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSeller;
