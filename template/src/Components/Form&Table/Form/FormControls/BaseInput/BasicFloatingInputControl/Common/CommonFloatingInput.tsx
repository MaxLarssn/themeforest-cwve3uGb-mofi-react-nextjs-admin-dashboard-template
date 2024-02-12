import { CommonFloatingInputProp } from "@/Types/FormType";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const CommonFloatingInput: React.FC<CommonFloatingInputProp> = ({ inputType, label, floatingLabel, placeholder, defaultValue, height, invalid }) => {
  return (
    <Row className="mb-1">
      <Label className="col-sm-3" check>{label}</Label>
      <Col sm="9">
        <FormGroup floating>
          <Input type={inputType} invalid={invalid} placeholder={placeholder} defaultValue={defaultValue} style={{ height: `${height}` }} />
          <Label check htmlFor="floatingInputValue">{floatingLabel}</Label>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CommonFloatingInput;
