import { Card, CardBody, Col } from "reactstrap";
import { FormattedLabels } from "@/Constant";
import FormatedLabelForm from "./FormatedLabelForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const FormatedLabel = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={FormattedLabels} />
        <CardBody>
          <FormatedLabelForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormatedLabel;
