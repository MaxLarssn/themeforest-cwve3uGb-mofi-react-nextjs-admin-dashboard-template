import { Container, Row } from "reactstrap";
import BasicModalCart from "./BasicModal";
import SizeModalCart from "./SizesModal";
import FullScreenModals from "./FullScreenModal";
import CenteredModal from "./CenteredModal";
import ToggleBetweenModals from "./ToggleBetweenModals";
import StaticBackdropModal from "./StaticBackdropModal";
import MofiCustomModals from "./MofiCustomModals";

const ModalContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicModalCart />
        <SizeModalCart />
        <FullScreenModals />
        <CenteredModal />
        <ToggleBetweenModals />
        <StaticBackdropModal />
        <MofiCustomModals />
      </Row>
    </Container>
  );
};

export default ModalContainer;
