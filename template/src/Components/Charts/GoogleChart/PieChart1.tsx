import { Card, CardBody, Col } from "reactstrap";
import { PieChartOne } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PieOneChartData, PieOneChartDataOption } from "@/Data/Charts/GoogleChart";

const PieChart1 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={PieChartOne} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart chartType="PieChart" width="100%" height="300px" data={PieOneChartData} options={PieOneChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart1;
