import { Container, Row } from "reactstrap";
import BarChart from "./BarChart";
import LineGraph from "./LineGraph";
import RadarGraph from "./RadarGraph";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import PolarChart from "./PolarChart";

const ChartJsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BarChart />
        <LineGraph />
        <RadarGraph />
        <LineChart />
        <DoughnutChart />
        <PolarChart />
      </Row>
    </Container>
  );
};

export default ChartJsContainer;
