import { Card, CardBody, Col } from "reactstrap";
import { ProjectsOverviews } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { OrderChart, ProjectChart } from "@/Data/General/Dashboard/Project";

const ProjectsOverview = () => {
  return (
    <Col xl="5" className="col-xl-50 proorder-md-5">
      <Card>
        <DashboardCommonHeader title={ProjectsOverviews} />
        <CardBody className="pb-0">
          <div className="current-sale-container order-container">
            <ReactApexChart className="overview-wrapper" id="orderoverview" options={ProjectChart} series={ProjectChart.series} height={340} />
            <div className="back-bar-container">
              <ReactApexChart id="order-bar" options={OrderChart} series={OrderChart.series} height={180} type="bar" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsOverview;
