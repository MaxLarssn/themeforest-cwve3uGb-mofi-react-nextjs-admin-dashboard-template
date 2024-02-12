import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FlatInputStyles, PleaseDoComments, SelectYourFavoriteRomanNumber, SelectYourMultiplePaintings } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FlatInputStyleList, FlatInputTypeData, FlateStyleDataList } from "@/Data/Form&Table/Form";
import CommonSelectInput from "./Common/CommonSelectInput";

const FlatInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FlatInputStyles} span={FlatInputTypeData} />
        <Form className="theme-form dark-inputs">
          <CardBody>
            <CommonSelectInput label={SelectYourFavoriteRomanNumber} inputClass="btn-square" span={FlatInputStyleList} />
            <CommonSelectInput label={SelectYourMultiplePaintings} inputClass="btn-square" span={FlateStyleDataList} multiple />
            <Row>
              <Col>
                <FormGroup>
                  <Label check>{PleaseDoComments}</Label>
                  <Input type="textarea" className="btn-square" rows={3}></Input>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Form>
      </Card>
    </Col>
  );
};

export default FlatInputStyle;
