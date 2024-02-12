import { Card, CardBody, Col } from "reactstrap";
import { Schedules } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { ScheduleChart } from "@/Data/General/Dashboard/Education";

const Schedule = () => {
  return (
    <Col xxl="5" xl="6" className="box-col-6 proorder-md-9">
      <Card>
        <DashboardCommonHeader title={Schedules}/>
        <CardBody className="schedult-calendar pt-0">
          <div className="schedule-container">
            <ReactApexChart id="schedulechart" options={ScheduleChart} series={ScheduleChart.series} type="rangeBar" height={355} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Schedule;
