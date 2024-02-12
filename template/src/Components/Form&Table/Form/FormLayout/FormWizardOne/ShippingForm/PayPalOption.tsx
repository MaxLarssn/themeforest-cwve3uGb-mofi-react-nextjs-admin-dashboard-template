import { ImagePath, Paypal } from "@/Constant";
import { PaymentMethodOptionPropsType } from "@/Types/FormType";
import { Col, FormGroup, Input, Label } from "reactstrap";

const PayPalOption :React.FC<PaymentMethodOptionPropsType> = ({paymentMethodName,getUserData,}) => {
  return (
    <Col xs="12">
      <div className="card-wrapper border rounded-3 light-card">
        <div>
          <FormGroup check className="radio radio-primary">
            <Input id="shipping-choose5" type="radio" name="paymentMethodName" value="Paypal" checked={paymentMethodName === "Paypal"} onChange={getUserData}/>
            <Label className="mb-0 f-w-500" htmlFor="shipping-choose5" check>{Paypal}</Label>
          </FormGroup>
          <p>You will be taken to the paypal website to finish your transaction safely</p>
        </div>
        <div>
          <img src={`${ImagePath}/checkout/paypal.png`} alt="paypal"/>
        </div>
      </div>
    </Col>
  );
};

export default PayPalOption;
