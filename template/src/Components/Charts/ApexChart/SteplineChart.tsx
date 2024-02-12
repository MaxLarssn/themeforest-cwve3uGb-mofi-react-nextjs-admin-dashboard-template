import { Card, CardBody, Col } from "reactstrap";
import { SteplineCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StepLineChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const SteplineChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={SteplineCharts} />
        <CardBody>
          <div id="stepline">
            <ReactApexChart options={StepLineChartData} series={StepLineChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SteplineChart;
