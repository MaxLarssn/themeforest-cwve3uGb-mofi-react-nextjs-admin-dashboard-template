import { Container, Row } from "reactstrap";
import SimpleTabs from "./SimpleTabs";
import IconsWithTabs from "./IconsWithTabs";
import VerticalTabs from "./VerticalTabs";
import PillsTabs from "./PillsTabs";
import JustifyTabs from "./JustifyTabs";
import MaterialStyleLeftTabs from "./MaterialStyleLeftTabs";
import MaterialStyleTabs from "./MaterialStyleTabs";
import BorderTabs from "./BorderTabs";

const TabsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SimpleTabs />
        <IconsWithTabs />
        <VerticalTabs />
        <PillsTabs />
        <JustifyTabs />
        <MaterialStyleLeftTabs />
        <MaterialStyleTabs />
        <BorderTabs />
      </Row>
    </Container>
  );
};

export default TabsContainer;
