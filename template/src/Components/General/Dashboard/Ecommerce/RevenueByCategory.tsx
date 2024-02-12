import { Card, CardBody, Col } from "reactstrap";
import { RevenueByCategoryTitle } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { RevenueChartData } from "@/Data/General/Dashboard/Ecommerce";

const RevenueByCategory = () => {
  return (
    <Col xl="3" lg="5" sm="6">
      <Card>
        <DashboardCommonHeader title={RevenueByCategoryTitle} />
        <CardBody className="revenue-category">
        <div className="donut-legend" id="legend">
          <ReactApexChart id="chart" options={RevenueChartData} series={RevenueChartData.series} type="donut" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RevenueByCategory;