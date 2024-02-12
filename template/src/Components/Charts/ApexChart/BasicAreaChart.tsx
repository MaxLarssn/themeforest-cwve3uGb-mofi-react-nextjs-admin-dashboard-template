import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicAreaCharts } from "@/Constant";
import { BasicAreaChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const BasicAreaChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={BasicAreaCharts} />
        <CardBody>
          <div id="basic-apex">
            <ReactApexChart options={BasicAreaChartData} series={BasicAreaChartData.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicAreaChart;