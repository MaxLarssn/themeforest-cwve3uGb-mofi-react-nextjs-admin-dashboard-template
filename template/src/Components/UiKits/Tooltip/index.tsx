import { Container, Row } from "reactstrap";
import BasicTooltips from "./BasicTooltip"
import ColoredTooltip from "./ColoredTooltip"
import TooltipDirections from "./TooltipDirections"
import ElementsWithHoverEffect from "./ElementsWithHoverEffect";
import FilledTooltip from "./FilledTooltip";

const TooltipContainer = () => {
  return (
      <Container fluid>
        <Row>
          <BasicTooltips />
          <ColoredTooltip />
          <TooltipDirections />
          <ElementsWithHoverEffect />
          <FilledTooltip />
        </Row>
      </Container>
  );
};

export default TooltipContainer;
