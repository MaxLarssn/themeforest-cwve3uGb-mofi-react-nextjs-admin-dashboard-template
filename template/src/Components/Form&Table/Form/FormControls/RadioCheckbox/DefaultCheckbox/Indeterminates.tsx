import { Col, Input, Label } from "reactstrap";
import { Indeterminate, IndeterminateCheckbox } from "@/Constant";

export const Indeterminates = () => {
  return (
    <Col xl="12" sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{Indeterminate}</h6>
        <div className="form-check">
          <Input id="flexCheckIndeterminate" type="checkbox" />
          <Label htmlFor="flexCheckIndeterminate" check>{IndeterminateCheckbox}</Label>
        </div>
      </div>
    </Col>
  );
};
