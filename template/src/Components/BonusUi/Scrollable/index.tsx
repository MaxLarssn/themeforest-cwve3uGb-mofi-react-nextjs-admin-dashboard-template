import { Container, Row } from "reactstrap";
import CustomScrollbar from "./CustomScrollbar";
import SmallSizeScrollbar from "./SmallSizeScrollbar";
import BadgesScrollbar from "./BadgesScrollbar";
import ProfileScrollable from "./ProfileScrollable";
import ScrollableContent from "./ScrollableContent";
import HorizontalScrollbar from "./HorizontalScrollbar";
import BothSideVisibleScrollbar from "./BothSideVisibleScrollbar";

const ScrollableContainer = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <CustomScrollbar />
          <SmallSizeScrollbar />
          <BadgesScrollbar />
          <ProfileScrollable />
          <ScrollableContent />
          <HorizontalScrollbar />
          <BothSideVisibleScrollbar />
        </Row>
      </Container>
    </>
  );
};

export default ScrollableContainer;
