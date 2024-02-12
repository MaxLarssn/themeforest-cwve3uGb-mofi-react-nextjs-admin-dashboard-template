import { Card, CardBody, Col } from "reactstrap";
import { ChatJSLineChart } from "@/Constant";
import { Doughnut } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DoughnutChartData, DoughnutChartDataOption } from "@/Data/Charts/ChartJS";

const DoughnutChart = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CommonCardHeader title={ChatJSLineChart} />
        <CardBody className="chart-block">
          <Doughnut id="myDoughnutGraph" data={DoughnutChartData} options={DoughnutChartDataOption} width={734} height={335} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoughnutChart;
