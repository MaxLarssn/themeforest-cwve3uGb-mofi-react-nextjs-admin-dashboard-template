import { Container, Row } from "reactstrap";
import LiveToast from "./LiveToast";
import ColorsSchemes from "./ColorsSchemes";
import StackingToasts from "./StackingToasts";
import TranslucentToasts from "./TranslucentToasts";
import DefaultToast from "./DefaultToast";
import UniqueToast from "./UniqueToast";
import ToastPlacement from "./ToastPlacement";

const ToastsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <LiveToast />
        <ColorsSchemes />
        <StackingToasts />
        <TranslucentToasts />
        <DefaultToast />
        <UniqueToast />
        <ToastPlacement />
      </Row>
    </Container>
  );
};

export default ToastsContainer;
