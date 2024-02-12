import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CryptocurrencyPrice } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CryptoCurrencyPrice } from "@/Data/General/Widgets/Chart";

const CryptocurrencyPrices = () => {
  return (
    <Col xl="6" lg="12" className="xl-50">
      <Card>
        <CommonCardHeader title={CryptocurrencyPrice} />
        <CardBody>
          <div className="chart-container crypto-chart">
            <Row>
              <Col xs="12">
                <ReactApexChart id="chart-crypto" options={CryptoCurrencyPrice} series={CryptoCurrencyPrice.series} type="area" height={400} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptocurrencyPrices;
