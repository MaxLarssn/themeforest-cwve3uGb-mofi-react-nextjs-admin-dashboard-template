import { Card, CardBody, Col } from "reactstrap";
import { ChatJSLineGraph } from "@/Constant";
import { Line } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LineGraphChartData, LineGraphChartDataOption } from "@/Data/Charts/ChartJS";

const LineGraph = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CommonCardHeader title={ChatJSLineGraph} />
        <CardBody className="chart-block">
            <Line id="myGraph" data={LineGraphChartData} options={LineGraphChartDataOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineGraph;
