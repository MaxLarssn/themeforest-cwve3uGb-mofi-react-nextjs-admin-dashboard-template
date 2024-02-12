import React from "react";
import { Container, Row } from "reactstrap";
import AreaChart1 from "./AreaChart1";
import AreaChart2 from "./AreaChart2";
import ColumnChart1 from "./ColumnChart1";
import ColumnChart2 from "./ColumnChart2";
import GanttChart from "./GanttChart";
import LineChart from "./LineChart";
import ComboChart from "./ComboChart";
import BarChart2 from "./BarChart2";
import WordTree from "./WordTree";
import PieChart1 from "./PieChart1";
import PieChart2 from "./PieChart2";
import PieChart3 from "./PieChart3";
import PieChart4 from "./PieChart4";

const GoogleChartContainer = () => {
  return (
    <Container fluid>
      <Row>
        <AreaChart1 />
        <AreaChart2 />
        <ColumnChart1 />
        <ColumnChart2 />
        <GanttChart />
        <LineChart />
        <ComboChart />
        <BarChart2 />
        <WordTree />
        <PieChart1 />
        <PieChart2 />
        <PieChart3 />
        <PieChart4 />
      </Row>
    </Container>
  );
};

export default GoogleChartContainer;
