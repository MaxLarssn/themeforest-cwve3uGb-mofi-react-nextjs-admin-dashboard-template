import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { SuccessMessages, LoginSuccessfully } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SuccessMeassageData } from "@/Data/BonusUi/SweetAlert";

const SuccessMessage = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "success", title: "Good job!", text: "You clicked the button!", confirmButtonColor:"#7A70BA" });
  };
  
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={SuccessMessages} span={SuccessMeassageData} />
        <CardBody className="btn-showcase">
          <Button color="success" className="sweet-8" type="button" onClick={displayAlert}>{LoginSuccessfully}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SuccessMessage;
