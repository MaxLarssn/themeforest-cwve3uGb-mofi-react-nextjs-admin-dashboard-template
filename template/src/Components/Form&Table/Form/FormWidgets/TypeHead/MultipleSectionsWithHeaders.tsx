import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MultipleSectionWithHeader } from "@/Constant";
import { MultiWithHeaderData, MultipleSectionHeaderData } from "@/Data/Form&Table/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const MultipleSectionsWithHeaders = () => { 
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={MultipleSectionWithHeader} span={MultipleSectionHeaderData} />
        <CardBody>
          <div id="multiple-datasets">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead id="multiple-typeahead" labelKey={"name"} multiple options={MultiWithHeaderData} placeholder="Choose a state..." className="shadow-none" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleSectionsWithHeaders;
