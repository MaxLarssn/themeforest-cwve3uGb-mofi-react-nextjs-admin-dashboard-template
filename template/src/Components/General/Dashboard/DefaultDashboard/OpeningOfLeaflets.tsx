import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { OpeningOfLeaflet } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import { GrowthChart } from "@/Data/General/Dashboard/DefaultDashboard";

const OpeningOfLeaflets = () => {
  return (
    <Col xl="3" md="6" className="proorder-xl-2 proorder-md-2">
      <Card>
        <DashboardCommonHeader title={OpeningOfLeaflet} />
        <CardBody className="pb-0 opening-box">
          <div className="d-flex align-items-center gap-2">
            <h2>$ 12,463</h2>
            <div className="d-flex">
              <p className="mb-0 up-arrow"><i className="fa fa-arrow-up" /></p>
              <span className="f-w-500 font-success">+ 20.08%</span>
            </div>
          </div>
          <ReactApexChart id="growthchart" options={GrowthChart} series={GrowthChart.series} height={150} type="line"  />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OpeningOfLeaflets;
