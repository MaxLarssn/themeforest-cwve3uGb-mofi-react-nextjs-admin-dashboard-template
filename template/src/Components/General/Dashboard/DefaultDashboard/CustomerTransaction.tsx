import { Card, CardBody, Col } from "reactstrap";
import { CustomerTransactions } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { CustomerChartData } from "@/Data/General/Dashboard/DefaultDashboard";

const CustomerTransaction = () => {
  return (
    <Col xl="5" md="7" className="proorder-xl-4 box-col-5 proorder-md-6">
      <Card>
        <DashboardCommonHeader title={CustomerTransactions} />
        <CardBody className="pb-0">
          <ReactApexChart id="customer-transaction" options={CustomerChartData} series={CustomerChartData.series} height={310} type="bar"  />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomerTransaction;
