import { Col, Input, Label } from "reactstrap";
import { IconsRadios } from "@/Constant";
import { CustomRadioList } from "@/Data/Form&Table/Form";

export const IconsRadio = () => {
  return (
    <Col xl="4" sm="12" className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{IconsRadios}</h6>
        <div className="form-check radio radio-primary ps-0">
          <ul className="radio-wrapper">
            <li className="p-1 pt-2 pb-2">
              <Input id="radio-icon" className="d-block" type="radio" name="radio2"/>
              <Label htmlFor="radio-icon" check>
                <i className="fa fa-sliders"></i><span>Sliders</span>
              </Label>
            </li>
            {CustomRadioList.map(({ icon, id, text, defaultChecked }, index) => (
              <li className="p-1 pt-2 pb-2" key={index}>
                <Input className="checkbox-shadow d-block" id={`radio-${id}`} type="radio" defaultChecked={defaultChecked} name="radio2" />
                <Label htmlFor={`radio-${id}`} check>
                  <i className={`fa fa-${icon}`}></i>
                  <span>{text}</span>
                </Label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};
