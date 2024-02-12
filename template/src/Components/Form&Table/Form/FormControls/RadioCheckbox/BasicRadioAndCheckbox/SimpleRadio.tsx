import { Col, Input, Label } from "reactstrap";
import { BasicRadioAndCheckboxMaps, BasicRadioAndCheckboxSimpleRadios } from "@/Constant";
import { BasicRadioDataList } from "@/Data/Form&Table/Form";

export const SimpleRadio = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{BasicRadioAndCheckboxSimpleRadios}</h6>
        <div className="form-check-size">
          <div className="form-check form-check-inline radio radio-primary">
            <Input id="radioinline1" type="radio" name="radio5" defaultChecked />
            <Label className="mb-0" htmlFor="radioinline1" check>
              {BasicRadioAndCheckboxMaps}
            </Label>
          </div>
          {BasicRadioDataList.map(({ id, text }, index) => (
            <div className="form-check form-check-inline radio radio-primary" key={index}>
              <Input id={id} type="radio" name="radio5" defaultChecked />
              <Label className="mb-0" htmlFor={id} check>
                {text}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};
