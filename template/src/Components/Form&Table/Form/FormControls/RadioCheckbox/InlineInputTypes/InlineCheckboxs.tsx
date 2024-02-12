import { Col, Input, Label } from "reactstrap";
import { InlineCheckbox } from "@/Constant";
import { InlineCheckboxData } from "@/Data/Form&Table/Form";

export const InlineCheckboxs = () => {
  return (
    <Col md="6" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{InlineCheckbox}</h6>
        <div className="form-check-size rtl-input">
          <div className="form-check form-check-inline">
            <Input className="me-2" id="inlineCheckbox1" type="checkbox" defaultChecked />
            <Label htmlFor="inlineCheckbox1" check>I</Label>
          </div>
          {InlineCheckboxData.map(({ id, text, disabled }, index) => (
            <div className="form-check form-check-inline" key={index}>
              <Input className="me-2" id={id} type="checkbox" disabled={disabled} />
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
