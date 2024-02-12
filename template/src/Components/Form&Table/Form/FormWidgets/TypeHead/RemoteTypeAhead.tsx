import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { RemotetypeAheadHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MoviesList, RemoteTypeHeadData } from "@/Data/Form&Table/Form";

const RemoteTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={RemotetypeAheadHeading} span={RemoteTypeHeadData} />
        <CardBody>
          <div id="remote">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={MoviesList} placeholder="Choose Option" id="Remote TypeAhead"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RemoteTypeAhead;
