import { Card, CardBody, Col } from "reactstrap";
import { LineCharts } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LineChartData, LineChartDataOption } from "@/Data/Charts/GoogleChart";

const LineChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={LineCharts} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="line-chart">
            <Chart chartType="Line" width="100%" height="500px" data={LineChartData} options={LineChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChart;
