import { Card, CardBody, Col } from "reactstrap";
import { MixedCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MixChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const MixedChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={MixedCharts} />
        <CardBody>
          <div id="mixedchart">
            <ReactApexChart options={MixChartData} series={MixChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MixedChart;
