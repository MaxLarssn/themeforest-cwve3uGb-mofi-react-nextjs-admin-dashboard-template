import { SaleChartData } from "@/Data/General/Widgets/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const TotalSaleWidgets = () => {
  return (
    <Row>
      {SaleChartData.map((data, index) => (
        <Col lg="4" md={index == 2 ? '12' : "6"} className="box-col-4" key={index}>
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <CardBody>
                <Row className="pb-0 m-0">
                  <Col xl="9" lg="8" xs="9" className="p-0">
                    <h5 className="f-w-600 mb-2">{data.title}</h5>
                    <h4>{data.amount}</h4>
                    <span>{data.description}</span>
                  </Col>
                  <Col xl="3" lg="4" xs="3" className="text-end p-0">
                    <h6 className="txt-success">{data.percentage}</h6>
                  </Col>
                </Row>
              </CardBody>
              <div id={data.id}>
                <ReactApexChart options={data.chart} series={data.chart.series} type={data.chart.chart?.type} height={200} />
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TotalSaleWidgets;