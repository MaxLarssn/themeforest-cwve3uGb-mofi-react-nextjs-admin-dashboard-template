import { Container, Row } from "reactstrap";
import FlatCard from "./FlatCard";
import WithoutshadowCard from "./WithoutshadowCard";
import IconInHeading from "./IconInHeading";
import InfoColorHeader from "./InfoColorHeader";
import InfoColorBody from "./InfoColorBody";
import InfoColorFooters from "./InfoColorFooters";
import DarkColorCard from "./DarkColorCard";
import BasicCard from "@/Components/BonusUi/BasicCard/BasicCard";

const BasicCardContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicCard />
        <FlatCard />
        <WithoutshadowCard />
        <IconInHeading />
        <DarkColorCard />
        <InfoColorHeader />
        <InfoColorBody />
        <InfoColorFooters />
      </Row>
    </Container>
  );
};

export default BasicCardContainer;
