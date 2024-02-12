import { Container, Row } from "reactstrap";
import { DarkTheme } from "./DarkTheme";
import LightTheme from "./LightTheme";
import OutlineDarkAndLightAlerts from "./OutlineDarkAndLightAlerts";
import AlertsWithIconsandTextActions from "./AlertsWithIconsandTextActions";
import DismissingDarkAlerts from "./DismissingDarkAlerts";
import DismissingLightAlerts from "./DismissingLightAlerts";
import LiveAlert from "./LiveAlert";
import LeftBorderAlert from "./LeftBorderAlert";
import AdditionalContent from "./AdditionalContent";

const AlertContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DarkTheme />
        <LightTheme />
        <OutlineDarkAndLightAlerts />
        <AlertsWithIconsandTextActions />
        <DismissingDarkAlerts />
        <DismissingLightAlerts />
        <LiveAlert />
        <LeftBorderAlert />
        <AdditionalContent />
      </Row>
    </Container>
  );
};

export default AlertContainer;
