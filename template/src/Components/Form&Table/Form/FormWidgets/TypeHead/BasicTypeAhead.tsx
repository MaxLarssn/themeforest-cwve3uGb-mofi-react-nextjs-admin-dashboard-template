import { Typeahead } from "react-bootstrap-typeahead";
import { Card, Col, CardBody, Form } from "reactstrap";
import { BasicTypeaheads } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTypeHeadData, StateOfUsa } from "@/Data/Form&Table/Form";

const BasicTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={BasicTypeaheads} span={BasicTypeHeadData} />
        <CardBody>
          <div id="the-basics">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={StateOfUsa} placeholder="States of USA" id="Basic TypeAhead" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTypeAhead;
