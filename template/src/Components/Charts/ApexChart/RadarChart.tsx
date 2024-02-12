import { Card, CardBody, Col } from "reactstrap";
import { RadarCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadarChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const RadarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={RadarCharts} />
        <CardBody>
          <div id="radarchart">
            <ReactApexChart options={RadarChartData} series={RadarChartData.series} type="radar" height={310} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChart;
