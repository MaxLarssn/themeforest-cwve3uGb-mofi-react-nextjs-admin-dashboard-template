import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CryptoAnnotation } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CryptoAnnotationChart } from "@/Data/General/Widgets/Chart";

const CryptoAnnotations = () => {
  return (
    <Col xl="6" lg="12" className="xl-50">
      <Card>
        <CommonCardHeader title={CryptoAnnotation} />
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs="12">
                <ReactApexChart id="crypto-annotation" options={CryptoAnnotationChart} series={CryptoAnnotationChart.series} type="line" height={400} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptoAnnotations;
