import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { CheckboxesAndRadio } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CheckAndRadioData } from "@/Data/Form&Table/Form";

const CheckboxesAndRadios = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={CheckboxesAndRadio} span={CheckAndRadioData} />
        <CardBody className="checkbox-checked card-wrapper input-group-wrapper">
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="checkbox" />
            </InputGroupText>
            <Input type="text"/>
          </InputGroup>
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="radio" defaultChecked/>
            </InputGroupText>
            <Input type="text"/>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  )
};

export default CheckboxesAndRadios;
