import { Card, CardBody, Col } from "reactstrap";
import { BubbleCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BubbleChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const BubbleChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={BubbleCharts} />
        <CardBody>
          <div id="chart-bubble">
            <ReactApexChart options={BubbleChartData} series={BubbleChartData.series} type="bubble" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BubbleChart;
