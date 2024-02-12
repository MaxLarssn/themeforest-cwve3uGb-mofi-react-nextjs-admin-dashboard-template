import { Card, CardBody, Col } from "reactstrap";
import { RadialBarCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CircleChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const RadialBarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={RadialBarCharts} />
        <CardBody>
          <div id="circlechart">
            <ReactApexChart options={CircleChartData} series={CircleChartData.series} type="radialBar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadialBarChart;
