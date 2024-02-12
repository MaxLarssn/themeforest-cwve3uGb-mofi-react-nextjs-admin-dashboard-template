import { Card, CardBody, Col } from "reactstrap";
import { ComboCharts } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ComboChartData, ComboChartDataOption } from "@/Data/Charts/GoogleChart";

const ComboChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={ComboCharts} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="combo-chart">
            <Chart chartType="ComboChart" width="100%" height="500px" data={ComboChartData} options={ComboChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ComboChart;
