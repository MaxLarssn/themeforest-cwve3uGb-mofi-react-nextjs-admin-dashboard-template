import { Container } from "reactstrap";
import LeftRibbons from "./LeftRibbons";
import RightRibbons from "./RightRibbon";

const RibbonsContainer = () => {
  return (
    <Container fluid>
      <LeftRibbons />
      <RightRibbons />
    </Container>
  );
};

export default RibbonsContainer;
