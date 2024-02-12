import { Card, CardBody, Col } from "reactstrap";
import { ChatJSLineChart } from "@/Constant";
import { Line } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LineChartData, LineChartDataOption } from "@/Data/Charts/ChartJS";

const LineChart = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CommonCardHeader title={ChatJSLineChart} />
        <CardBody className="chart-block">
          <Line id="myLineCharts" data={LineChartData} options={LineChartDataOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChart;
