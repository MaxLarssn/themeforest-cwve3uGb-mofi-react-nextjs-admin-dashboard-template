import { Card, CardBody, Col } from "reactstrap";
import { PieChartTwo } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PieChartTwoData, PieChartTwoDataOption } from "@/Data/Charts/GoogleChart";

const PieChart2 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={PieChartTwo} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart3">
            <Chart chartType="PieChart" width="100%" height="300px" data={PieChartTwoData} options={PieChartTwoDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart2;
