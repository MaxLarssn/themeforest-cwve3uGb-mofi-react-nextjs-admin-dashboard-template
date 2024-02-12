import { Card, CardBody, Col } from "reactstrap";
import { AreaSpalineCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AreaSpalingChart } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const AreaSpalineChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={AreaSpalineCharts} />
        <CardBody>
          <div id="area-spaline">
            <ReactApexChart options={AreaSpalingChart} series={AreaSpalingChart.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AreaSpalineChart;
