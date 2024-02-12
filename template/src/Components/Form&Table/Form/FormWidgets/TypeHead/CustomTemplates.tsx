import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { CustomTemplate } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomTemplateData, OscarWinnerData } from "@/Data/Form&Table/Form";

const CustomTemplates = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={CustomTemplate} span={CustomTemplateData} />
        <CardBody>
          <div id="custom-templates">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={OscarWinnerData} placeholder="Oscar winners" id="Custom Templates"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomTemplates;
