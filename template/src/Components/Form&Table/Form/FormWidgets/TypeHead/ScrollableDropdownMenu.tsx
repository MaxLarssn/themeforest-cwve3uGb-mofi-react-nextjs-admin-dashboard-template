import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { ScrollableDropDownMenu } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CountryDataList, ScrollableDropdownData } from "@/Data/Form&Table/Form";

const ScrollableDropdownMenu = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ScrollableDropDownMenu} span={ScrollableDropdownData} />
        <CardBody>
          <div id="scrollable-dropdown-menu">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={CountryDataList} placeholder="Countries" id="Scrollable DropdownMenu"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableDropdownMenu;
