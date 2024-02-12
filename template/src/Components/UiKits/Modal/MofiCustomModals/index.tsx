import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MofiCustomModal } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import ModalThird from "./BalanceModal";
import { ModalOne } from "./ProfileModal";
import ModalTwo from "./ResultModal";
import { CustomModalData } from "@/Data/Uikits/modal";

const MofiCustomModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={MofiCustomModal} span={CustomModalData} />
        <CardBody>
          <Row className="g-3">
            <ModalOne />
            <ModalTwo />
            <ModalThird />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MofiCustomModals;
