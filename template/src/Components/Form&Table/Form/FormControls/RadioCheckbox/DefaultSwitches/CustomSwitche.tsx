import { Col, Input, Label } from "reactstrap";
import { CheckedSwitchCheckboxInput, CustomSwitches, DefaultSwitchCheckboxInput } from "@/Constant";

export const CustomSwitche = () => {
  return (
    <Col md="6" xl="4">
      <div className="card-wrapper border rounded-3 rtl-input checkbox-checked">
        <h6 className="sub-title">{CustomSwitches}</h6>
        <div className="form-check form-switch">
          <Input id="flexSwitchCheckDefault" type="switch" role="switch" />
          <Label htmlFor="flexSwitchCheckDefault" check>
            {DefaultSwitchCheckboxInput}
          </Label>
        </div>
        <div className="form-check form-switch">
          <Input id="flexSwitchCheckChecked" type="switch" role="switch" defaultChecked />
          <Label htmlFor="flexSwitchCheckChecked" check>
            {CheckedSwitchCheckboxInput}
          </Label>
        </div>
      </div>
    </Col>
  );
};
