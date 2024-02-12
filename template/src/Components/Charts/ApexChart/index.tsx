import React from "react";
import { Container, Row } from "reactstrap";
import BasicAreaChart from "./BasicAreaChart";
import AreaSpalineChart from "./AreaSpalineChart";
import BarChart from "./BarChart";
import FirstColumnChart from "./FirstColumnChart";
import BubbleChart from "./BubbleChart";
import SteplineChart from "./SteplineChart";
import DonutCharts from "./DonutCharts";
import MixedChart from "./MixedChart";
import CandlestickChart from "./CandlestickChart";
import RadarChart from "./RadarChart";
import RadialBarChart from "./RadialBarChart";
import ColumnCharts from "./ColumnCharts";
import PieChart from "./PieChart";

const ApexChartContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicAreaChart />
        <AreaSpalineChart />
        <BarChart />
        <FirstColumnChart />
        <BubbleChart />
        <SteplineChart />
        <ColumnCharts />
        <PieChart />
        <DonutCharts />
        <MixedChart />
        <CandlestickChart />
        <RadarChart />
        <RadialBarChart />
      </Row>
    </Container>
  );
};

export default ApexChartContainer;
