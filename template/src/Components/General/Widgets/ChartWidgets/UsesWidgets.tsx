import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { Uses } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { UsesChart } from "@/Data/General/Widgets/Chart";

const UsesWidgets = () => {
  return (
    <Col xl="7" lg="12" className="xl-50 box-col-7">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader title={Uses} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <ReactApexChart id="chart-widget9" options={UsesChart} series={UsesChart.series} type="bubble" height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default UsesWidgets;
