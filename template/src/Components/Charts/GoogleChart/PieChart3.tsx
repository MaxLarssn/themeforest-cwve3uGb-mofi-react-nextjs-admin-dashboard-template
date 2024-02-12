import { Card, CardBody, Col } from "reactstrap";
import { PieChartThree } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PieChartThreeData, PieChartThreeDataOption } from "@/Data/Charts/GoogleChart";

const PieChart3 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={PieChartThree} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart4">
            <Chart chartType="PieChart" width="100%" height="300px" data={PieChartThreeData} options={PieChartThreeDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart3;
