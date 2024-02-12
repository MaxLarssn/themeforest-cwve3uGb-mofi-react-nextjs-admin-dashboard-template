import { CommonEdgeRaisedInputProp } from "@/Types/FormType";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const CommonEdgeInput :React.FC<CommonEdgeRaisedInputProp>= ({ inputType, label, placeholder,inputClass,rows }) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{label}</Label>
          <Input className={`btn-pill ${inputClass}`} type={inputType} placeholder={placeholder} rows={rows} />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CommonEdgeInput;
