import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { DangerAlerts, DangerMode } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DangerMessageData } from "@/Data/BonusUi/SweetAlert";

const DangerAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "error", title: "It's danger", text: "Something went wrong!",confirmButtonColor:"#7A70BA" });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={DangerAlerts} span={DangerMessageData} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-7" onClick={displayAlert}>{DangerMode}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DangerAlert;
