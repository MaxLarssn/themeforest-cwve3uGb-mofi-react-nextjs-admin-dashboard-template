import { Card, CardBody, Col } from "reactstrap";
import { ColumnChartTwo } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColumnCartTwoData, ColumnCartTwoDataOption } from "@/Data/Charts/GoogleChart";

const ColumnChart2 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={ColumnChartTwo} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="column-chart2">
            <Chart chartType="Bar" width="100%" height="400px" data={ColumnCartTwoData} options={ColumnCartTwoDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColumnChart2;
