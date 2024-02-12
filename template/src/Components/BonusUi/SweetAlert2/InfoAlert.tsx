import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { InfoAlerts, Informational } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InfoSweetAlert } from "@/Data/BonusUi/SweetAlert";

const InfoAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "Please Click on this button it's big surprise for you.",confirmButtonColor:"#7A70BA" }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({ text: "Thank you for visit Mofi theme : true" ,confirmButtonColor:"#7A70BA"});
      } else {
        SweetAlert.fire({ text: "Thank you for visit Mofi theme : null",confirmButtonColor:"#7A70BA" });
      }
    });
  };
  
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={InfoAlerts} span={InfoSweetAlert} />
        <CardBody className="btn-showcase">
          <Button color="info" className="sweet-4" onClick={displayAlert}>{Informational}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InfoAlert;
