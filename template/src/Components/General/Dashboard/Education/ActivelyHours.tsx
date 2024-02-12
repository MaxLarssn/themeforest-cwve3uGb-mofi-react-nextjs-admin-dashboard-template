import { Card, CardBody, Col } from "reactstrap";
import { ActivelyHour } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { ActivelyHoursChart } from "@/Data/General/Dashboard/Education";

const ActivelyHours = () => {
  return (
    <Col xxl="4" xl="7" md="6" className="box-col-7 proorder-md-3">
      <Card>
        <DashboardCommonHeader title={ActivelyHour} />
        <CardBody>
          <ReactApexChart id="actively-hours" options={ActivelyHoursChart} series={ActivelyHoursChart.series} type="bar" height={345} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivelyHours;
