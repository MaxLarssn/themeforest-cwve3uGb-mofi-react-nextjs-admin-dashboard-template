import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FullScreenModal } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import FullModal from "./FullModal";
import FullScreenBelowSm from "./FullScreenBelowSm";
import FullScreenBelowMd from "./FullScreenBelowMd";
import FullScreenBelowLg from "./FullScreenBelowLg";
import FullScreenBelowXl from "./FullScreenBelowXl";
import FullScreenBelowXxl from "./FullScreenBelowXxl";
import { FullScreenModalData } from "@/Data/Uikits/modal";

const FullScreenModals = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={FullScreenModal} span={FullScreenModalData} />
        <CardBody className="badge-spacing">
          <FullModal />
          <FullScreenBelowSm />
          <FullScreenBelowMd />
          <FullScreenBelowLg />
          <FullScreenBelowXl />
          <FullScreenBelowXxl />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FullScreenModals;