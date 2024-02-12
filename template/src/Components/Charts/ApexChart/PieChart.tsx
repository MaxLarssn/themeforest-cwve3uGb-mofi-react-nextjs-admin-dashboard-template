import { Card, CardBody, Col } from "reactstrap";
import { PieCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PieChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const PieChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={PieCharts} />
        <CardBody>
          <div id="piechart">
            <ReactApexChart options={PieChartData} series={PieChartData.series} type="pie" height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart;
