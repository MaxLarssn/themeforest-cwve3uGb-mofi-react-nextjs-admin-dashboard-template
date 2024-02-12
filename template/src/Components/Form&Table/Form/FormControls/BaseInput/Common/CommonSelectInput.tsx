import { CommonSelectInputProp } from "@/Types/FormType";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const CommonSelectInput: React.FC<CommonSelectInputProp> = ({ label, inputClass, span, multiple }) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{label}</Label>
          <Input type="select" className={`digits ${inputClass}`} multiple={multiple}>
            {span.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CommonSelectInput;
