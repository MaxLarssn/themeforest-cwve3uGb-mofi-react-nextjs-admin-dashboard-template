import { Card, Col, CardBody } from "reactstrap";
import StudentValidationFormCardBody from "./StudentValidationFormCardBody";
import { StudentValidationFormHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StudentValidationData } from "@/Data/Form&Table/Form";

const StudentValidationForm = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={StudentValidationFormHeading} span={StudentValidationData}/>
        <CardBody className="custom-input">
          <StudentValidationFormCardBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default StudentValidationForm;
