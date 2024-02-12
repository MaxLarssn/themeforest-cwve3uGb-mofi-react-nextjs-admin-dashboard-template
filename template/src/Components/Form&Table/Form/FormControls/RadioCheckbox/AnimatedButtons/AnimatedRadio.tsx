import { Col, Input, Label } from "reactstrap";
import { SelectYourPaymentMethods, VisaAnimated } from "@/Constant";
import { Fragment } from "react";
import { AnimatedPaymentData } from "@/Data/Form&Table/Form";

export const AnimatedRadio = () => {
  return (
    <Col sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{SelectYourPaymentMethods}</h6>
        <Label className="d-block" htmlFor="edo-ani" check></Label>
        <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />
        {VisaAnimated}
        {AnimatedPaymentData.map(({ id, text, defaultChecked }, index) => (
          <Fragment key={index}>
            <Label className="d-block" htmlFor={id} check></Label>
            <Input className="radio_animated" id={id} type="radio" name="rdo-ani" defaultChecked={defaultChecked} />{text}</Fragment>
        ))}
      </div>
    </Col>
  );
};
