import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { QuestionsAlerts, QuestionsState } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { QuestionAlertData } from "@/Data/BonusUi/SweetAlert";

const QuestionsAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "Are you sure you want to do this?", showCancelButton: true, cancelButtonText: "Oh noez!", confirmButtonText: "Aww yess!",confirmButtonColor: "#7A70BA" });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={QuestionsAlerts} span={QuestionAlertData} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="sweet-11" onClick={displayAlert}>{QuestionsState}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default QuestionsAlert;
