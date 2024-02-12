import { Col, FormGroup, Input, Label } from "reactstrap";
import { SelectPaymentMethod } from "@/Constant";

export const CardTypeDetail = () => {
  const PaymentModeName = ["Visa", "MasterCard", "paypal"];

  return (
    <Col xxl="6" className="mb-3">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{SelectPaymentMethod}</h6>
        <div className="radio-form">
          {PaymentModeName.map((data, index) => (
            <FormGroup check key={index} className="mb-3">
              <Input id={`flexRadioDefault${index}`} type="radio" name="paymentMethod" value="visa" />
              <Label htmlFor={`flexRadioDefault${index}`} check>{data}</Label>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  );
};
