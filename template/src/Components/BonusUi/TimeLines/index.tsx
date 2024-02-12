import { Container, Row } from "reactstrap";
import BasicTimeline from "./BasicTimeline";
import HoveringTimeline from "./HoveringTimeline";
import VariationTimeline from "./VariationTimeline";
import HorizontalTimeline from "./HorizontalTimeline";
import Timelines from "./Timelines";

const TimelineContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicTimeline />
        <HoveringTimeline />
        <VariationTimeline />
        <HorizontalTimeline />
        <Timelines />
      </Row>
    </Container>
  );
};

export default TimelineContainer;
