import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Finances } from "@/Constant";
import { FinanceChart } from "@/Data/General/Widgets/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const Finance = () => {
  return (
    <Col xl="5" lg="12" className="box-col-5">
      <Card>
        <CommonCardHeader title={Finances} />
        <CardBody>
          <div className="chart-container column-container">
            <ReactApexChart id="columnchart" options={FinanceChart} series={FinanceChart.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Finance;
