import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { StockMarkets } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StockMarketChart } from "@/Data/General/Widgets/Chart";

const StockMarket = () => {
  return (
    <Col sm="12" className="box-col-12">
      <div className="donut-chart-widget">
        <Card>
          <CommonCardHeader title={StockMarkets} />
          <CardBody>
            <ReactApexChart id="chart-widget13" options={StockMarketChart} series={StockMarketChart.series} type="line" height={450} />
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default StockMarket;
