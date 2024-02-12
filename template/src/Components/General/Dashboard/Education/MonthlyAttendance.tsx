import { Card, CardBody, Col } from "reactstrap";
import { MonthlyAttendances } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { MonthlyChartData } from "@/Data/General/Dashboard/Education";

const MonthlyAttendance = () => {
  return (
    <Col xxl="7" xl="12" className="box-col-12 proorder-md-8">
      <Card>
        <DashboardCommonHeader title={MonthlyAttendances} />
        <CardBody className="pb-0">
          <div className="monthly-report">
            <ul className="d-flex align-item-center gap-2 simple-list flex-row">
              <li><span className="bg-primary"> </span>{"Teacher"}</li>
              <li><span className="bg-secondary"> </span>{"Student"}</li>
            </ul>
          </div>
          <ReactApexChart id="monthly-reportchart" type="line" height={315} options={MonthlyChartData} series={MonthlyChartData.series} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MonthlyAttendance;
