import { Col, Input, Label } from "reactstrap";
import { CustomRadio, DefaultCheckedRadio, DefaultRadioLabel } from "@/Constant";

export const CustomRadios = () => {
  return (
    <Col sm="6" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{CustomRadio}</h6>
        <div className="form-check">
          <Input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
          <Label htmlFor="flexRadioDefault1" check>
            {DefaultRadioLabel}
          </Label>
        </div>
        <div className="form-check">
          <Input id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />
          <Label htmlFor="flexRadioDefault2" check>
            {DefaultCheckedRadio}
          </Label>
        </div>
      </div>
    </Col>
  );
};
