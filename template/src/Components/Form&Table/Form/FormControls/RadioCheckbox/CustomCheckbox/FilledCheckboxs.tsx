import { Col, Input, Label } from "reactstrap";
import { FilledCheckbox, WarningCheckboxSolidWarning } from "@/Constant";
import { FillCheckboxList } from "@/Data/Form&Table/Form";

export const FilledCheckboxs = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{FilledCheckbox}</h6>
        <div className="form-check checkbox checkbox-solid-warning">
          <Input id="solid4" type="checkbox" defaultChecked />
          <Label htmlFor="solid4" check>
            {WarningCheckboxSolidWarning}
          </Label>
        </div>
        {FillCheckboxList.map(({ id, text, color }, index) => (
          <div className={`form-check checkbox checkbox-solid-${color}`} key={index}>
            <Input id={`solid-${id}`} type="checkbox" />
            <Label htmlFor={`solid-${id}`} check>
              {text}
            </Label>
          </div>
        ))}
      </div>
    </Col>
  );
};
