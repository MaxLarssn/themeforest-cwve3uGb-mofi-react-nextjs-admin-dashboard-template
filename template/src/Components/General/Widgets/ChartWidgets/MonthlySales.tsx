import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MonthlySale } from "@/Constant";
import { MonthlySalesChart } from "@/Data/General/Widgets/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const MonthlySales = () => {
  return (
    <Col xl="5" lg="12" className="xl-50 box-col-5">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader title={MonthlySale} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <ReactApexChart id="chart-widget8" options={MonthlySalesChart} series={MonthlySalesChart.series} type="radar" height={300} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default MonthlySales;
