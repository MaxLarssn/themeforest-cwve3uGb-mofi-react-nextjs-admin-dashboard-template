import { Card, CardBody, Col } from "reactstrap";
import { AreaChartTwo } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AreaChartTwoData, AreaChartTwoDataOption } from "@/Data/Charts/GoogleChart";

const AreaChart2 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={AreaChartTwo} />
        <CardBody className="p-0 chart-block">
          <div className="chart-overflow" id="area-chart2">
            <Chart chartType="AreaChart" width="100%" height="400px" data={AreaChartTwoData} options={AreaChartTwoDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AreaChart2;
