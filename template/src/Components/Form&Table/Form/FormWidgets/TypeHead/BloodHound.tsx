import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { BloodHoundHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BloodHoundData, StateOfUsa } from "@/Data/Form&Table/Form";

const BloodHound = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={BloodHoundHeading} span={BloodHoundData} />
        <CardBody>
          <div id="bloodhound">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={StateOfUsa} placeholder="States of USA" id="BloodHound" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BloodHound;
