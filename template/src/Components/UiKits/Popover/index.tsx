import { Container, Row } from "reactstrap";
import BasicPopover from "./BasicPopover";
import PopoverDirection from "./PopoverDirection";
import PopoverOffset from "./PopoverOffset";

const PopoverContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicPopover />
        <PopoverDirection />
        <PopoverOffset />
      </Row>
    </Container>
  );
};

export default PopoverContainer;
