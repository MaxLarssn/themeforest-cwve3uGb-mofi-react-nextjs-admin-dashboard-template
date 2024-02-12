import { Card, CardBody, Col } from "reactstrap";
import { DonutChart } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DountChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const DonutCharts = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={DonutChart} />
        <CardBody>
          <div id="donutchart">
            <ReactApexChart options={DountChartData} series={DountChartData.series} type="donut" height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DonutCharts;
