import React from "react";
import { Container, Row } from "reactstrap";
import TotalSaleWidgets from "./TotalSaleWidgets";
import MonthlyHistory from "./MonthlyHistory";
import LiveProducts from "./LiveProducts";
import StockMarket from "./StockMarket";
import SkillStatus from "./SkillStatus";
import OrderStatus from "./OrderStatus";
import Turnover from "./Turnover";
import CryptocurrencyPrices from "./CryptocurrencyPrices";
import CryptoAnnotations from "./CryptoAnnotations";
import Finance from "./Finance";
import OrderStatusWidgets from "./OrderStatusWidgets";
import MonthlySales from "./MonthlySales";
import UsesWidgets from "./UsesWidgets";

const ChartWidgetsContainer = () => {
  return (
    <Container fluid>
      <TotalSaleWidgets />
      <Row>
        <MonthlyHistory />
        <SkillStatus />
        <OrderStatus />
      </Row>
      <Row>
        <LiveProducts />
        <Turnover />
        <CryptocurrencyPrices />
        <CryptoAnnotations />
      </Row>
      <Row>
        <StockMarket />
        <Finance />
        <OrderStatusWidgets />
        <MonthlySales />
        <UsesWidgets />
      </Row>
    </Container>
  );
};

export default ChartWidgetsContainer;
