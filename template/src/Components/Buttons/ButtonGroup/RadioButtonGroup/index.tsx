import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadioButtonGroups } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import { RadioButtonGroupData } from "../../../../Data/Buttons/ButtonGroup";
import { DynamicRadioButtonGroup } from "./DynamicRadioButtonGroup";
import { StaticRadioButtonGroup } from "./StaticRadioButtonGroup";

const RadioButtonGroup = () => {
  return (
    <Col sm="12">
      <Card className="radio-checkbox-group">
        <CommonCardHeader title={RadioButtonGroups} span={RadioButtonGroupData} />
        <CardBody className="btn-group-showcase">
          <Row>
            <StaticRadioButtonGroup />
            <DynamicRadioButtonGroup />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadioButtonGroup;
