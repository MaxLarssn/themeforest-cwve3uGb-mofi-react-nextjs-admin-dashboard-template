import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LiveProduct } from "@/Constant";
import { LiveProductChart } from "@/Data/General/Widgets/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const LiveProducts = () => {
  return (
    <Col xl="7" lg="12" className="xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader title={LiveProduct} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <ReactApexChart id="chart-widget6" options={LiveProductChart} series={LiveProductChart.series} type="area" height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default LiveProducts;
