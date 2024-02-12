import { Card, CardBody, Col } from "reactstrap";
import { ChartColumn } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnnotationChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const ColumnCharts = () => {
  return (
    <Col sm="12" xl="12" className="box-col-6">
      <Card>
        <CommonCardHeader title={ChartColumn} />
        <CardBody>
          <div id="annotationchart">
            <ReactApexChart options={AnnotationChartData} series={AnnotationChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColumnCharts;
