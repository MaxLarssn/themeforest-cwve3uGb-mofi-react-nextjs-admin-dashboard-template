import { Col, Input, Label } from "reactstrap";
import { FilledRadios, ProductRadio } from "@/Constant";
import { FillRadioList } from "@/Data/Form&Table/Form";

export const FilledRadio = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 fill-radios h-100 checkbox-checked">
        <h6 className="sub-title">{FilledRadios}</h6>
        <div className="form-check radio radio-primary">
          <Input id="radio111" type="radio" name="radio3" defaultChecked />
          <Label htmlFor="radio111" check>
            {ProductRadio}
          </Label>
        </div>
        {FillRadioList.map(({ id, text, color }, index) => (
          <div className={`form-check radio radio-${color}`} key={index}>
            <Input id={`radios-${id}`} type="radio" name="radio3" />
            <Label htmlFor={`radios-${id}`} check>
              {text}
            </Label>
          </div>
        ))}
      </div>
    </Col>
  );
};
