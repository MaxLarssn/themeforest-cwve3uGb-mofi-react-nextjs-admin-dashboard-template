import { Col, Input, Label } from "reactstrap";
import { InlineRadio } from "@/Constant";
import { InlineRadioData } from "@/Data/Form&Table/Form";

export const InlineRadios = () => {
  return (
    <Col md="6" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{InlineRadio}</h6>
        <div className="form-check-size rtl-input">
          <div className="form-check form-check-inline">
            <Input className="me-2" id="inlineRadio1" type="radio" name="inlineRadioOptions" defaultChecked />
            <Label htmlFor="inlineRadio1" check>1</Label>
          </div>
          {InlineRadioData.map(({ id, text, disabled }, index) => (
            <div className="form-check form-check-inline" key={index}>
              <Input className="me-2" id={id} type="radio" name="inlineRadioOptions" disabled={disabled} />
              <Label htmlFor={id} check>
                {text}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};
