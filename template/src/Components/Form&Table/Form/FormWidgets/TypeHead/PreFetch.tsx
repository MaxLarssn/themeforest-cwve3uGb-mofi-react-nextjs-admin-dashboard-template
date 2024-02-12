import { Typeahead } from "react-bootstrap-typeahead";
import { Card, Col, CardBody, Form } from "reactstrap";
import { PreFetchHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CountryDataList, PreFetchData } from "@/Data/Form&Table/Form";

const PreFetch = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={PreFetchHeading} span={PreFetchData} />
        <CardBody>
          <div id="the-basics">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={CountryDataList} placeholder="Countries" id="PreFetch"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PreFetch;
