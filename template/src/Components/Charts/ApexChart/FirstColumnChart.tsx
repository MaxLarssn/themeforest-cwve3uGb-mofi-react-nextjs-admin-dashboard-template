import { Card, CardBody, Col } from "reactstrap";
import { ColumnCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColumnChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const FirstColumnChart = () => {
  return(
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={ColumnCharts} />
        <CardBody>
          <div id="column-chart">
            <ReactApexChart options={ColumnChartData} series={ColumnChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
};

export default FirstColumnChart;
