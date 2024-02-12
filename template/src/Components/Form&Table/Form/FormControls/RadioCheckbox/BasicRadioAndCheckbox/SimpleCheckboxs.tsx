import { Col, Input, Label } from "reactstrap";
import { BasicRadioAndCheckboxBlog, SimpleCheckbox } from "@/Constant";
import { BasicRadioCheckboxDataList } from "@/Data/Form&Table/Form";

export const SimpleCheckboxs = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{SimpleCheckbox}</h6>
        <div className="form-check-size">
          <div className="form-check form-check-inline checkbox checkbox-dark mb-0">
            <Input id="inline-1" type="checkbox" />
            <Label htmlFor="inline-1" check>
              {BasicRadioAndCheckboxBlog}
            </Label>
          </div>
          {BasicRadioCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
            <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
              <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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
