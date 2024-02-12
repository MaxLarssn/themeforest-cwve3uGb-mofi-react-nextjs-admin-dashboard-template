import { Custom, ImagePath } from "@/Constant";
import { Col, Input, Label } from "reactstrap";

export const CustomImagesWithCheckbox = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{Custom}</h6>
        <div className="img-checkbox">
          <Input className="main-img-cover" id="img-check-1" type="checkbox" />
          <Label className="mb-0" htmlFor="img-check-1" check>
            <img src={`${ImagePath}/switch/1.jpg`} alt="coffee-beans" />
          </Label>
        </div>
      </div>
    </Col>
  );
};
