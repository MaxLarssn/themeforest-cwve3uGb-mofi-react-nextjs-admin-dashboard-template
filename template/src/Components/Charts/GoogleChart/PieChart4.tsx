import { Card, CardBody, Col } from "reactstrap";
import { PieChartFour } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PieChartForthData, PieChartForthDataOption } from "@/Data/Charts/GoogleChart";

const PieChart4 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={PieChartFour} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart2">
            <Chart chartType="PieChart" width="100%" height="300px" data={PieChartForthData} options={PieChartForthDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart4;
