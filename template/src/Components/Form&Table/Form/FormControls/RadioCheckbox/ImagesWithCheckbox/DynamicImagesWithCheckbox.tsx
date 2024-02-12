import { ImagePath } from "@/Constant";
import { ImageWithCheckboxDataList } from "@/Data/Form&Table/Form";
import { Col, Input, Label } from "reactstrap";

export const DynamicImagesWithCheckbox = () => {
  return (
    <>
      {ImageWithCheckboxDataList.map(({ src, label, id, defaultChecked, disabled, alt }, index) => (
        <Col xxl="3" sm="6" key={index}>
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <h6 className="sub-title">{label}</h6>
            <div className="img-checkbox">
              <Input className="main-img-cover" id={id} type="checkbox" name="radio6" defaultChecked={defaultChecked} disabled={disabled} />
              <Label className="mb-0" htmlFor={id} check>
                <img src={`${ImagePath}/switch/${src}.jpg`} alt={alt} />
              </Label>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};
