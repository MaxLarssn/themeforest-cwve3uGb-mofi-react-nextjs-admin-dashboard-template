import { Card, CardBody, Col } from "reactstrap";
import { BarCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BarChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const BarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={BarCharts} />
        <CardBody>
          <div id="basic-bar">
            <ReactApexChart options={BarChartData} series={BarChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarChart;
