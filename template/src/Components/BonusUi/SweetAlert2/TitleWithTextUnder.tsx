import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { Surprise, TitleWithATextUnder } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TitleSweetAlert } from "@/Data/BonusUi/SweetAlert";

const TitleWithTextUnder = () => {
  const displayAlert = () => {
    SweetAlert.fire({ title: "It's Magic!", text: "Thank you for visiting Mofi theme" ,confirmButtonColor:"#7A70BA"});
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={TitleWithATextUnder} span={TitleSweetAlert} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-2" onClick={displayAlert}>{Surprise}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TitleWithTextUnder;
