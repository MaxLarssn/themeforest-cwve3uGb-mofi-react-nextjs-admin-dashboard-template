import { Container, Row } from "reactstrap";
import { SizesCart } from "./SizesCart";
import StatusIndicatorCart from "./StatusIndicator";
import ShapsCart from "./ShapsCart";
import RatioCart from "./RatioCart";
import GroupingCart from "./Grouping";

const AvatarsContainer = () => {
  return (
    <Container fluid>
      <div className="user-profile">
        <Row>
          <SizesCart />
          <StatusIndicatorCart />
          <ShapsCart />
          <RatioCart />
          <GroupingCart />
        </Row>
      </div>
    </Container>
  );
};

export default AvatarsContainer;
