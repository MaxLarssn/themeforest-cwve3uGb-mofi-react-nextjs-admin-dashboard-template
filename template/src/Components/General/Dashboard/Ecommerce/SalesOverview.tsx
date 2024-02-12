import { Card, CardBody, Col } from "reactstrap";
import { SalesOverviews } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { SalesOverviewChart } from "@/Data/General/Dashboard/Ecommerce";

const SalesOverview = () => {
  return (
    <Col xxl="5" xl="4" lg="7" sm="12">
      <Card>
        <DashboardCommonHeader title={SalesOverviews}/>
        <CardBody className="pt-0">
          <ReactApexChart id="salse-overview" options={SalesOverviewChart} series={SalesOverviewChart.series} type="rangeBar" height={350} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesOverview;
