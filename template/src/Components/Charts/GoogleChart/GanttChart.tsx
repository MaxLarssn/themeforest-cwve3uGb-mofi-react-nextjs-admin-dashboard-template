import { Card, CardBody, Col } from "reactstrap";
import { GanttCharts } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { GanttChartData, GanttChartDataOption } from "@/Data/Charts/GoogleChart";

const GanttChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={GanttCharts} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="gantt_chart">
            <Chart chartType="Gantt" width="100%" height="280px" data={GanttChartData} options={GanttChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GanttChart;
