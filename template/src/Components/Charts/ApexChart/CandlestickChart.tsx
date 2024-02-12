import { Card, CardBody, Col } from "reactstrap";
import { CandlestickCharts } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CandleStickChartData } from "@/Data/Charts/ApexChart";
import ReactApexChart from 'react-apexcharts'

const CandlestickChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={CandlestickCharts} />
        <CardBody>
          <div id="candlestick">
            <ReactApexChart options={CandleStickChartData} series={CandleStickChartData.series} type="candlestick" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CandlestickChart;
