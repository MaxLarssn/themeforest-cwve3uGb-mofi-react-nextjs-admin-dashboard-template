import { Card, CardBody, Col, Input } from "reactstrap";
import { FormControlSizings, FormControlSizingsPlaceholder } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FormControlSizingData } from "@/Data/Form&Table/Form";

const FormControlSizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FormControlSizings} span={FormControlSizingData} />
        <CardBody>
          <Input bsSize="sm" type="text" placeholder={FormControlSizingsPlaceholder} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormControlSizing;
