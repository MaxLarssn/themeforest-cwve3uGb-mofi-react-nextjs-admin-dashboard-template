import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { UsernameAlerts, Username } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { UsernameAlertData } from "@/Data/BonusUi/SweetAlert";

const UsernameAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "Please! Submit Your Username :", input: "text", confirmButtonColor:"#7A70BA" }).then((result) => {
      if (result.value) {
        SweetAlert.fire({ text: `Your name is : ${result.value}`,confirmButtonColor:"#7A70BA" });
      } else {
        SweetAlert.fire({ text: `Your name is : ${result.value}`,confirmButtonColor:"#7A70BA" });
      }
    });
  };
  
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={UsernameAlerts} span={UsernameAlertData} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-13" onClick={displayAlert}>{Username}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UsernameAlert;
